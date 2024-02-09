import * as React from "react"
import Seo from "../../components/seo"

import {
  Code,
  Heading,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react" //@ts-ignore
import IntroImage from "../../images/blog/azure-vm/intro.jpg" //@ts-ignore
import hostImage from "../../images/blog/azure-vm/host.png" //@ts-ignore
import staticFilesImage from "../../images/blog/azure-vm/staticfiles.png" //@ts-ignore
import venvImg from "../../images/blog/azure-vm/venv.png" //@ts-ignore
import nginxConfigImg from "../../images/blog/azure-vm/nginx-config.png" //@ts-ignore
import nginxLogo from "../../images/blog/azure-vm/nginx_logo.png" //@ts-ignore
import nginxTestImg from "../../images/blog/azure-vm/nginx-test.png" //@ts-ignore
import gunicornServiceImg from "../../images/blog/azure-vm/gunicorn.png" //@ts-ignore
import envImg from "../../images/blog/azure-vm/env.png" //@ts-ignore
import architectureImg from "../../images/blog/azure-vm/azure.jpg" //@ts-ignore
import browserImg from "../../images/blog/azure-vm/browser.png"
import "../../styles/blog.css"
import YouTubeModal from "../../components/YoutubeModal"
import "prismjs/themes/prism.css"
import CodeBlock from "../../components/blog/CodeBlock"
import Commands from "../../components/blog/commands"
import CodeVariable from "../../components/blog/codeVariable"
import BlogContent, { BlogContentList } from "../../components/blog/BlogContent"
import BlogSection from "../../components/blog/BlogSection"
import BlogHeading from "../../components/blog/BlogHeading"
import BlogText from "../../components/blog/BlogText"
import BlogImage from "../../components/blog/BlogImage"
import BlogList from "../../components/blog/BlogList"
import BlogListItem from "../../components/blog/BlogListItem"
import BlogLink from "../../components/blog/BlogLink"
import BlogLayout from "../../components/blog/BlogLayout"
import BlogLastUpdated from "../../components/blog/BlogLastUpdated"

function DeployDjangoOnAzureVm() {
  const contentList: BlogContentList[] = [
    { title: "Introduction", url: "#introduction" },
    {
      title: "Architecture",
      url: "#architecture",
    },
    {
      title: "Prerequisites",
      url: "#prerequisites",
    },
    {
      title: "1.Create a Virtual Machine",
      url: "#1.create-virtual-environment",
    },
    {
      title: "2.Config Django Settings for Production",
      url: "#2.config-django-settings-for-production",
    },
    {
      title: "3.Upload Code to Server",
      url: "#3.upload-code-to-server",
    },
    {
      title: "4.Environmental Variables, Static Files & Gunicorn",
      url: "#4.environmental-variables-static-files-and-gunicorn",
    },
    {
      title: "5.Nginx",
      url: "#5.nginx",
    },
    {
      title: "6.Check & test django site",
      url: "#6.check-and-test-django-site",
    },
  ]

  return (
    <BlogLayout>
      <Heading as={'h1'}>
        Tutorial: Deploy Django Site on Azure, AWS, GCP Virtual Machine (VM)
      </Heading>
      <BlogLastUpdated dateTime={"2024-02-06"} />
      <BlogImage
        src={IntroImage}
        alt="Deploy Django Site on Linux Virtual Machine"
      />
      <BlogContent contentList={contentList} />

      <BlogSection id={"introduction"}>
        <BlogHeading>Introduction</BlogHeading>
        <BlogText>
          In this article, we will learn about how to deploy a django web app on
          azure VM. The steps can be replicated to deploy on other cloud
          providers such as Amazon web services(AWS), Google Cloud Platform(GCP)
          etc. For the sake of simplicity and to keep the article short, I
          assume you already have a django web app ready to deploy. If you don't
          have one, clone the below github repo to get started.
          <Commands>
            git clone https://github.com/code-with-saipraveeen/azure-django.git
          </Commands>
        </BlogText>
      </BlogSection>
      <BlogSection id={"architecture"}>
        <BlogHeading>Architecture</BlogHeading>
        <BlogImage src={architectureImg} alt={"vm-architecture"} />
      </BlogSection>

      <BlogSection id={"prerequisites"}>
        <BlogHeading>Prerequisites</BlogHeading>
        <BlogText>
          <BlogList type={"unordered"}>
            <BlogListItem>
              Azure/AWS/GCP/other cloud provider Account
            </BlogListItem>
          </BlogList>
        </BlogText>
      </BlogSection>

      <BlogSection id={"1.create-virtual-environment"}>
        <BlogHeading>1.Create a Virtual Machine</BlogHeading>
        <BlogList type={"ordered"}>
          <BlogListItem>
            Create a new linux virtual machine on your cloud provider. In this
            article, we will use Azure. You can find the instructions for other
            cloud providers below.
            <BlogList type={"unordered"}>
              <BlogListItem>
                <BlogLink href="https://docs.microsoft.com/en-us/azure/virtual-machines/linux/quick-create-portal">
                  Azure
                </BlogLink>
              </BlogListItem>
              <BlogListItem>
                <BlogLink href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html">
                  Amazon Web Services (AWS)
                </BlogLink>
              </BlogListItem>
              <BlogListItem>
                <BlogLink href="https://cloud.google.com/compute/docs/quickstart-linux">
                  Google Cloud Platform (GCP)
                </BlogLink>
              </BlogListItem>
            </BlogList>
          </BlogListItem>
          <BlogListItem>
            Select the appropriate image for your virtual machine. For this
            article, we will use Ubuntu 20.04 LTS.
          </BlogListItem>
          <BlogListItem>
            Allow Port 80(http) and 443(https) in the network settings of your
            cloud provider.
            <BlogList type={"unordered"}>
              <BlogListItem>
                <YouTubeModal
                  src="https://www.youtube.com/embed/eU64khUNv1w"
                  key={"azure-firewall"}
                  linkText={"Azure"}
                />
              </BlogListItem>
              <BlogListItem>
                <YouTubeModal
                  src="https://www.youtube.com/embed/FMcJ2OGaaP0"
                  key={"aws-firewall"}
                  linkText={"Amazon Web Services (AWS)"}
                />
              </BlogListItem>
              <BlogListItem>
                <YouTubeModal
                  src="https://www.youtube.com/embed/JmjqPpQdtW8"
                  key={"gcd-firewall"}
                  linkText={"Google Cloud Platform (GCP)"}
                />
              </BlogListItem>
            </BlogList>
          </BlogListItem>
          <BlogListItem>
            Connect to the VM instance using SSH.
            <BlogList type={"unordered"}>
              <BlogListItem>
                If your username is <CodeVariable>sai</CodeVariable> and
                ip-address of VM is
                <Code colorScheme={"orange"}>123.123.123.123</Code> with passkey{" "}
                <CodeVariable>passkey.pem</CodeVariable> (pem file)
              </BlogListItem>
              <BlogListItem>
                Open the terminal at the location of the pem file and run the
                below command.
                <Commands>ssh -i passkey.pem sai@123.123.123.123</Commands>
              </BlogListItem>
              <BlogListItem>
                (Optional) If you face{" "}
                <Code colorScheme={"red"}>
                  WARNING: UNPROTECTED PRIVATE KEY FILE!
                </Code>
                in the terminal then try to run the following command. This
                error occurs when more than one user on the system has access to
                the private key file.
                <Tabs mt={5}>
                  <TabList>
                    <Tab>MacOS/Linux(Bash)</Tab>
                    <Tab>Windows</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <Code mt={5} p={3} width={"100%"} rounded="md">
                        chmod 400 passkey.pem <br />
                        chown $USER passkey.pem <br />
                      </Code>
                    </TabPanel>
                    <TabPanel>
                      <Code mt={5} p={3} width={"100%"} rounded="md">
                        icacls.exe .\passkey.pem /inheritance:r <br />
                        icacls.exe .\passkey.pem /grant:r "$($env:USERNAME):(R)"
                      </Code>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </BlogListItem>
            </BlogList>
          </BlogListItem>
        </BlogList>
      </BlogSection>

      <BlogSection id={"2.config-django-settings-for-production"}>
        <BlogHeading>2.Config Django Settings for Production </BlogHeading>
        <BlogList type={"ordered"}>
          <BlogListItem>
            Change the <CodeVariable>DEBUG</CodeVariable> to{" "}
            <CodeVariable>False</CodeVariable> in the
            <CodeVariable>settings.py</CodeVariable> file. If you using
            environment variables, then change the code as follows
            <CodeBlock language={"python"}>
              DEBUG = os.environ.get('DEBUG', 'False') == 'True'
            </CodeBlock>
          </BlogListItem>
          <BlogListItem>
            Add VM ip-address to <CodeVariable>ALLOWED_HOSTS</CodeVariable> in
            the <CodeVariable>settings.py</CodeVariable> file.
            <CodeBlock language={"python"}>
              ALLOWED_HOSTS = [&lt;ip-address&gt;] # replace &lt;ip-address&gt;
              with your VM ip-address
            </CodeBlock>
            <Image src={hostImage} />
          </BlogListItem>

          <Heading as={"h3"} fontSize={"3xl"} mt={4}>
            WhiteNoise
          </Heading>

          <BlogText>
            WhiteNoise is used to serve static files in Django. Install
            WhiteNoise using the below command.
            <Commands>pip install whitenoise</Commands>
            Generally in production, we use a web server like Nginx or Apache to
            serve static files. But for simplicity, we will use WhiteNoise to
            serve static files. If you are using{" "}
            <CodeVariable>WhiteNoise</CodeVariable> for serving static files,
            then add the below code to the{" "}
            <CodeVariable>settings.py</CodeVariable> file, after the{" "}
            <CodeVariable>STATIC_URL='static/'</CodeVariable> variable.
          </BlogText>
          <CodeBlock language={"python"}>
            {`STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')\nSTATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'`}
          </CodeBlock>
          <BlogImage
            src={staticFilesImage}
            alt={"vs-code-django-static-files"}
          />
          <BlogListItem>
            Freeze python packages(add gunicorn) used in your project using the
            below command
            <Commands>
              pip install gunicorn
              <br />
              pip freeze {">"} requirements.txt
            </Commands>
          </BlogListItem>
        </BlogList>
      </BlogSection>

      <BlogSection id={"3.upload-code-to-server"}>
        <BlogHeading>Step 3: Upload Code to Server</BlogHeading>
        <BlogList type={"ordered"}>
          <BlogListItem>
            Login to VM server and create a new directory{" "}
            <CodeVariable>python</CodeVariable> in the VM to store the code and
            Logout.
            <Commands>mkdir python</Commands>
          </BlogListItem>
          <BlogListItem>
            Upload code to VM using{" "}
            <CodeVariable>Secure Copy (scp)</CodeVariable>.
            <Commands>
              scp -i passkey.pem -r "path/to/localdjangocode/"
              username@ip-address:~/python/
            </Commands>
          </BlogListItem>
          <BlogListItem>
            Login to VM server and install the following packages
            <BlogList type={"unordered"}>
              <BlogListItem>python3</BlogListItem>
              <BlogListItem>python3-venv</BlogListItem>
              <BlogListItem>python3-pip</BlogListItem>
            </BlogList>
            <Commands>
              sudo apt update
              <br />
              sudo apt install python3 python3-pip python3-venv
            </Commands>
          </BlogListItem>
          <BlogListItem>
            Change the directory to your django-code directory and create a
            virtual environment. Assuming your code is in the{" "}
            <CodeVariable>python/azure-vm</CodeVariable> directory.
            <Commands>
              cd python/azure-vm
              <br />
              python3 -m venv venv
              <br />
            </Commands>
          </BlogListItem>
          <BlogListItem>
            Activate the virtual environment and install the required packages.
            <Commands>
              source venv/bin/activate
              <br />
              pip install -r requirements.txt
            </Commands>
            <Image src={venvImg} my={2} />
          </BlogListItem>
        </BlogList>
      </BlogSection>

      <BlogSection id={"4.environmental-variables-static-files-and-gunicorn"}>
        <BlogHeading>
          4.Environmental Variables, Static Files & Gunicorn
        </BlogHeading>
        <BlogList type={"ordered"}>
          <BlogListItem>
            Add your environmental variables inside virtual environment. If you
            are using the given github repo in this article we need to export{" "}
            <CodeVariable>SECRET_KEY</CodeVariable> and
            <CodeVariable>DEBUG</CodeVariable>. Add other variables as per your
            project needs.
            <Commands>
              export SECRET_KEY="django-azure-super-secret=key12345" <br />
              export DEBUG=False
            </Commands>
            <BlogImage src={envImg} alt={"venv-environment-python"} />
          </BlogListItem>
          <BlogListItem>
            Collect static files
            <Commands>python manage.py collectstatic</Commands>
          </BlogListItem>
          <BlogListItem>
            Run the gunicorn server inside the virtual environment. Assuming
            your django app name is <CodeVariable>azure</CodeVariable>
            <Commands>gunicorn azure.wsgi:application</Commands>
            <Image src={gunicornServiceImg} my={2} />
          </BlogListItem>
        </BlogList>
      </BlogSection>
      <BlogSection id={"5.nginx"}>
        <BlogHeading>Step 5: Nginx</BlogHeading>
        <BlogImage src={nginxLogo} alt={"nginx-logo"} />
        <BlogText>
          Nginx [engine x] is reverse proxy HTTP web server. it was originally
          developed by Igor Sysoev. It has a market share of 41.17% among
          web-application-server market. Top companies like Netflix, WordPress,
          GitHub, and many others use Nginx.
        </BlogText>
        <BlogList type={"ordered"}>
          <BlogListItem>
            Install Nginx on the VM
            <Commands>
              sudo apt update
              <br />
              sudo apt install nginx
            </Commands>
          </BlogListItem>
          <BlogListItem>
            Start the Nginx service
            <Commands>
              sudo systemctl start nginx
              <br />
              sudo systemctl enable nginx
            </Commands>
          </BlogListItem>
          <BlogListItem>
            Create a new file <CodeVariable>django</CodeVariable> in the{" "}
            <CodeVariable>/etc/nginx/sites-available</CodeVariable> directory
            and add the below code to the file. Replace{" "}
            <CodeVariable>{`{YOUR_IP_ADDRESS}`}</CodeVariable> with your IP
            address.
            <Commands>sudo nano /etc/nginx/sites-available/django</Commands>
            <CodeBlock language={"nginx"}>
              {`server {
    listen 80;
    server_name {YOUR_IP_ADDRESS};  # Replace with your domain name or IP address

    location / {
        proxy_pass http://127.0.0.1:8000;  # Gunicorn address
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
`}
            </CodeBlock>
            <BlogImage src={nginxConfigImg} alt={"nginx-config"} />
          </BlogListItem>
          <BlogListItem>
            Create a symbolic link to the{" "}
            <CodeVariable>sites-enabled</CodeVariable> directory
            <Commands>
              sudo ln -s /etc/nginx/sites-available/django
              /etc/nginx/sites-enabled
            </Commands>
          </BlogListItem>
          <BlogListItem>
            Test the Nginx configuration
            <Commands>sudo nginx -t</Commands>
            <BlogImage src={nginxTestImg} alt={"nginx-test-cmd"} />
          </BlogListItem>
          <BlogListItem>
            Restart the Nginx service
            <Commands>sudo systemctl restart nginx</Commands>
          </BlogListItem>
        </BlogList>
      </BlogSection>

      <BlogSection id={"6.check-and-test-django-site"}>
        <BlogHeading>6.Check & test django site</BlogHeading>
        <BlogText>
          Type your VM <CodeVariable>ip-address</CodeVariable> in the browser.
          If you face any error(s), stop the gunicorn service and change the
          environment variable <CodeVariable>DEBUG=True</CodeVariable> in{" "}
          <CodeVariable>settings.py</CodeVariable>
        </BlogText>
        <BlogImage src={browserImg} alt={"browse-django-site"} />
      </BlogSection>

      <BlogSection id={"conclusion"}>
        <BlogHeading>Conclusion</BlogHeading>
        <BlogText>
          In this article, we learned how to deploy a django web app on an Azure
          virtual machine. We created a virtual machine, configured the django
          settings for production, uploaded the code to the server, and
          configured Nginx to serve the django app. The steps can be replicated
          to deploy on other cloud providers such as Amazon web services(AWS),
          Google Cloud Platform(GCP) etc.
        </BlogText>
      </BlogSection>
    </BlogLayout>
  )
}

export const Head = () => (
  <Seo
    title="Deploy Django Site on Azure, AWS, GCP Virtual Machine"
    description={
      "Deploy Django Site on Azure, AWS, GCP Virtual Machine using Nginx, Gunicorn, WhiteNoise, and Python Virtual Environment."
    }
  >
    <script type={"application/ld+json"}>
      {`{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Deploy Django Site on Azure, AWS, GCP Virtual Machine",
        datePublished: "2024-02-06",
        author: {
          "@type": "Person",
          name: "Sai Praveen Kondapalli",
        },
        publisher: {
  "@type": "Individual",
  name: "Sai Praveen Kondapalli",
  url: "https://saipraveen.me",
  logo: "https://saipraveen.me/logo.png"
  
        },
        "mainEntityOfPage": {
        "@type": "WebPage",
          "@id": "https://saipraveen.me/blog/deploy-django-on-azure-vm",
        },
        "articleBody": "Deploy Django Site on Azure, AWS, GCP Virtual Machine using Nginx, Gunicorn, WhiteNoise, and Python Virtual Environment."
        "hasPart": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Blog",
            "item": "https://saipraveen.me/blog"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Deploy Django Site on Azure, AWS, GCP Virtual Machine",
            "item": "https://saipraveen.me/blog/deploy-django-on-azure-vm"
          }
        ]
        },
        {
        "@type": "TableOfContents",
        "Position":1,
        "name":"Introduction",
        "url": "https://saipraveen.me/blog/deploy-django-on-azure-vm#introduction"
        },
        {
        "@type": "TableOfContents",
        "Position":2,
        "name":"Architecture",
        "url": "https://saipraveen.me/blog/deploy-django-on-azure-vm#architecture"
        },
        {
        "@type": "TableOfContents",
        "Position":3,
        "name":"Prerequisites",
"url": "https://saipraveen.me/blog/deploy-django-on-azure-vm#prerequisites"
        },
        {
        "@type": "TableOfContents",
        "Position":4,
        "name":"Create a Virtual Machine",
"url": "https://saipraveen.me/blog/deploy-django-on-azure-vm#1.create-virtual-environment"
        },
        {
        "@type": "TableOfContents",
        "Position":5,
        "name":"Config Django Settings for Production",
"url": "https://saipraveen.me/blog/deploy-django-on-azure-vm#2.config-django-settings-for-production"
        },
        {
        "@type": "TableOfContents",
"Position":6,
"name":"Upload Code to Server",
"url": "https://saipraveen.me/blog/deploy-django-on-azure-vm#3.upload-code-to-server"
        },
        {
        "@type": "TableOfContents",
"Position":7,
"name":"Environmental Variables, Static Files & Gunicorn",
"url": "https://saipraveen.me/blog/deploy-django-on-azure-vm#4.environmental-variables-static-files-and-gunicorn"
        },
        {
        "@type": "TableOfContents",
"Position":8,
"name":"Nginx",
"url": "https://saipraveen.me/blog/deploy-django-on-azure-vm#5.nginx"
        },
        {
        "@type": "TableOfContents",
"Position":9, 
"name":"Check & test django site",
"url": "https://saipraveen.me/blog/deploy-django-on-azure-vm#6.check-and-test-django-site"
        }
        
      }`}
    </script>
  </Seo>
)

export default DeployDjangoOnAzureVm
