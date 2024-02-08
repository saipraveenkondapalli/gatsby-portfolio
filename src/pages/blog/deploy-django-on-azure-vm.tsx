import * as React from "react"
import { useEffect } from "react"

import Layout from "../../components/Layout"
import Seo from "../../components/seo"

import {
  Code,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  ListItem,
  OrderedList,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  UnorderedList,
} from "@chakra-ui/react"
//@ts-ignore
import IntroImage from "../../images/blog/azure-vm/intro.jpg"
//@ts-ignore
import hostImage from "../../images/blog/azure-vm/host.png"
//@ts-ignore
import staticFilesImage from "../../images/blog/azure-vm/staticfiles.png"
//@ts-ignore
import venvImg from "../../images/blog/azure-vm/venv.png"
//@ts-ignore
import nginxConfigImg from "../../images/blog/azure-vm/nginx-config.png"
//@ts-ignore
import nginxLogo from "../../images/blog/azure-vm/nginx_logo.png"
//@ts-ignore
import nginxTestImg from "../../images/blog/azure-vm/nginx-test.png"
//@ts-ignore
import gunicornServiceImg from "../../images/blog/azure-vm/gunicorn.png"
//@ts-ignore
import envImg from "../../images/blog/azure-vm/env.png"
//@ts-ignore
import architectureImg from "../../images/blog/azure-vm/azure.jpg"
//@ts-ignore
import browserImg from "../../images/blog/azure-vm/browser.png"
import "../../styles/blog.css"
import YouTubeModal from "../../components/YoutubeModal"
import Prism from "prismjs"
import "prismjs/themes/prism.css"
import CodeBlock from "../../components/CodeBlock"
import Commands from "../../components/commands"
import CodeVariable from "../../components/codeVariable"

function DeployDjangoOnAzureVm() {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  })

  return (
    <Layout>
      <Container maxW="container.md" mt={["5", "10"]} mb={["5", "10"]}>
        <Heading>
          Tutorial: Deploy Django Site on Azure, AWS, GCP Virtual Machine (VM)
        </Heading>
        <Flex mt={5}>
          <Text>
            Last updated on{" "}
            <time
              aria-label={"Article review date"}
              dateTime={"2024-02-06T11:47:00.000Z"}
            >
              06 Feb 2024
            </time>
          </Text>
        </Flex>
        <Image
          mt={2}
          src={IntroImage}
          alt="Deploy Django Site on Azure Virtual Machine"
        />
        <section>
          <Heading as={"h2"} mt={2}>
            Contents
          </Heading>
          <UnorderedList my={3} p={2}>
            <ListItem>
              <a href={"#introduction"}>Introduction</a>
            </ListItem>
            <ListItem>
              <a href={"#architecture"}>Architecture</a>
            </ListItem>
            <ListItem>
              <a href={"#prerequisites"}>Prerequisites</a>
            </ListItem>
            <ListItem>
              <a href={"#1.create-virtual-environment"}>
                1.Create a Virtual Machine
              </a>
            </ListItem>
            <ListItem>
              <a href={"#2.config-django-settings-for-production"}>
                2.Config Django Settings for Production
              </a>
            </ListItem>
            <ListItem>
              <a href={"#3.upload-code-to-server"}>3.Upload Code to Server</a>
            </ListItem>
            <ListItem>
              <a href={"#4.environmental-variables-static-files-and-gunicorn"}>
                4.Environmental Variables, Static Files
              </a>{" "}
              & Gunicorn
            </ListItem>
            <ListItem>
              <a href={"#5.nginx"}>5.Nginx</a>
            </ListItem>
            <ListItem>
              <a href={"#6.check-and-test-django-site"}>
                6.Check & test django site
              </a>
            </ListItem>
          </UnorderedList>
        </section>
        <section id={"introduction"}>
          <Heading as={"h2"}>Introduction</Heading>
          <Text mt={5}>
            In this article, we will learn about how to deploy a django web app
            on azure VM. The steps can be replicated to deploy on other cloud
            providers such as Amazon web services(AWS), Google Cloud
            Platform(GCP) etc. For the sake of simplicity and to keep the
            article short, I assume you already have a django web app ready to
            deploy. If you don't have one, clone the below github repo to get
            started.
          </Text>

          <Code mt={5} p={3} width={"100%"} rounded="md">
            git clone https://github.com/saipraveen.dev.acc/django-azure-vm.git
          </Code>
        </section>
        <section id={"architecture"}>
          <Heading as={"h2"} mt={2}>
            Architecture{" "}
          </Heading>
          <Image mt={2} src={architectureImg} />
        </section>

        <section id={"prerequisites"}>
          <Heading as={"h2"} mt={2}>
            Prerequisites
          </Heading>
          <Text mt={5}>
            <UnorderedList>
              <ListItem>Azure/AWS/GCP/other cloud provider Account</ListItem>
            </UnorderedList>
          </Text>
        </section>

        <section id={"1.create-virtual-environment"}>
          <Heading as={"h2"} mt={5}>
            1.Create a Virtual Machine
          </Heading>
          <Text mt={5}></Text>
          <OrderedList>
            <ListItem>
              Create a new linux virtual machine on your cloud provider. In this
              article, we will use Azure. You can find the instructions for
              other cloud providers below.
              <UnorderedList>
                <ListItem>
                  <Link
                    color={"teal"}
                    colorScheme={"blue"}
                    href="https://docs.microsoft.com/en-us/azure/virtual-machines/linux/quick-create-portal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Azure
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    color={"teal"}
                    href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Amazon Web Services (AWS)
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    color={"teal"}
                    href="https://cloud.google.com/compute/docs/quickstart-linux"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Cloud Platform (GCP)
                  </Link>
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              Select the appropriate image for your virtual machine. For this
              article, we will use Ubuntu 20.04 LTS.
            </ListItem>
            <ListItem>
              Allow Port 80(http) and 443(https) in the network settings of your
              cloud provider.
              <UnorderedList>
                <ListItem>
                  <YouTubeModal
                    src="https://www.youtube.com/embed/eU64khUNv1w"
                    key={"azure-firewall"}
                    linkText={"Azure"}
                  />
                </ListItem>
                <ListItem>
                  <YouTubeModal
                    src="https://www.youtube.com/embed/FMcJ2OGaaP0"
                    key={"aws-firewall"}
                    linkText={"Amazon Web Services (AWS)"}
                  />
                </ListItem>
                <ListItem>
                  <YouTubeModal
                    src="https://www.youtube.com/embed/JmjqPpQdtW8"
                    key={"gcd-firewall"}
                    linkText={"Google Cloud Platform (GCP)"}
                  />
                  {/*<Link href="https://www.youtube.com/watch?v=JmjqPpQdtW8" target="_blank"*/}
                  {/*      rel="noopener noreferrer">Google Cloud Platform (GCP)</Link>*/}
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              Connect to the VM instance using SSH.
              <UnorderedList>
                <ListItem>
                  <Text>
                    If your username is <Code colorScheme={"orange"}>sai</Code>{" "}
                    and ip-address of VM is{" "}
                    <Code colorScheme={"orange"}>123.123.123.123</Code> with
                    passkey <Code colorScheme={"orange"}>passkey.pem</Code> (pem
                    file){" "}
                  </Text>
                </ListItem>
                <ListItem>
                  Open the terminal at the location of the pem file and run the
                  below command.
                  <Code width={"full"} p={3} my={2}>
                    ssh -i passkey.pem sai@123.123.123.123
                  </Code>
                </ListItem>
                <ListItem>
                  (Optional) If you face{" "}
                  <Code colorScheme={"red"}>
                    WARNING: UNPROTECTED PRIVATE KEY FILE!
                  </Code>
                  in the terminal then try to run the following command. This
                  error occurs when more than one user on the system has access
                  to the private key file.
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
                          icacls.exe .\passkey.pem /grant:r
                          "$($env:USERNAME):(R)"
                        </Code>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </ListItem>
              </UnorderedList>
            </ListItem>
          </OrderedList>
        </section>

        <section id={"2.config-django-settings-for-production"}>
          <Heading as={"h2"} mt={5}>
            2.Config Django Settings for Production{" "}
          </Heading>
          <OrderedList mt={3} p={2}>
            <ListItem>
              Change the <Code colorScheme={"orange"}>DEBUG</Code> to{" "}
              <Code colorScheme={"orange"}>False</Code> in the
              <Code colorScheme={"orange"}>settings.py</Code> file. If you using
              environment variables, then change the code as follows
              <CodeBlock language={"python"}>
                DEBUG = os.environ.get('DEBUG', 'False') == 'True'
              </CodeBlock>
            </ListItem>
            <ListItem>
              Add VM ip-address to{" "}
              <Code colorScheme={"orange"}>ALLOWED_HOSTS</Code> in the{" "}
              <Code colorScheme={"orange"}>settings.py</Code> file.
              <CodeBlock language={"python"}>
                ALLOWED_HOSTS = [&lt;ip-address&gt;] # replace
                &lt;ip-address&gt; with your VM ip-address
              </CodeBlock>
              <Image src={hostImage} />
            </ListItem>

            <Heading as={"h3"} fontSize={"3xl"} mt={4}>
              WhiteNoise
            </Heading>

            <Text mt={5}>
              WhiteNoise is used to serve static files in Django. Install
              WhiteNoise using the below command.
              <Code p={2} mt={2} width={"full"}>
                pip install whitenoise
              </Code>
            </Text>
            <Text>
              Generally in production, we use a web server like Nginx or Apache
              to serve static files. But for simplicity, we will use WhiteNoise
              to serve static files. If you are using{" "}
              <Code colorScheme={"orange"}>WhiteNoise</Code> for serving static
              files, then add the below code to the{" "}
              <Code colorScheme={"orange"}>settings.py</Code> file, after the{" "}
              <Code colorScheme={"orange"}>STATIC_URL='static/'</Code> variable.
            </Text>
            <CodeBlock language={"python"}>
              {`STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')\nSTATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'`}
            </CodeBlock>
            <Image mb={2} src={staticFilesImage} />
            <ListItem>
              Freeze python packages(add gunicorn) used in your project using
              the below command
              <Code p={2} mt={2} width={"full"}>
                pip install gunicorn
                <br />
                pip freeze {">"} requirements.txt
              </Code>
            </ListItem>
          </OrderedList>
        </section>

        <section id={"3.upload-code-to-server"}>
          <Heading as={"h2"} mt={5}>
            Step 3: Upload Code to Server
          </Heading>
          <OrderedList mt={3} p={2}>
            <ListItem>
              Login to VM server and create a new directory{" "}
              <Code colorScheme={"orange"}>python</Code> in the VM to store the
              code and Logout.
              <Commands>mkdir python</Commands>
            </ListItem>
            <ListItem>
              Upload code to VM using{" "}
              <Code colorScheme={"orange"}>Secure Copy (scp)</Code>.
              <Commands>
                scp -i passkey.pem -r "path/to/localdjangocode/"
                username@ip-address:~/python/
              </Commands>
            </ListItem>
            <ListItem>
              Login to VM server and install the following packages
              <UnorderedList>
                <ListItem>python3</ListItem>
                <ListItem>python3-venv</ListItem>
                <ListItem>python3-pip</ListItem>
              </UnorderedList>
              <Commands>
                sudo apt update
                <br />
                sudo apt install python3 python3-pip python3-venv
              </Commands>
            </ListItem>
            <ListItem>
              Change the directory to your django-code directory and create a
              virtual environment. Assuming your code is in the{" "}
              <Code colorScheme={"orange"}>python/azure-vm</Code> directory.
              <Commands>
                cd python/azure-vm
                <br />
                python3 -m venv venv
                <br />
              </Commands>
            </ListItem>
            <ListItem>
              Activate the virtual environment and install the required
              packages.
              <Commands>
                source venv/bin/activate
                <br />
                pip install -r requirements.txt
              </Commands>
              <Image src={venvImg} my={2} />
            </ListItem>
          </OrderedList>
        </section>
        <section id={"4.environmental-variables-static-files-and-gunicorn"}>
          <Heading as={"h2"} mt={5}>
            4.Environmental Variables, Static Files & Gunicorn
          </Heading>
          <OrderedList mt={3} p={2}>
            <ListItem>
              Add your environmental variables inside virtual environment. If
              you are using the given github repo in this article we need to
              export <CodeVariable>SECRET_KEY</CodeVariable> and{" "}
              <CodeVariable>DEBUG</CodeVariable>. Add other variables as per
              your project needs.
              <Commands>
                export SECRET_KEY="django-azure-super-secret=key12345" <br />
                export DEBUG=False
              </Commands>
              <Image my={2} src={envImg} />
            </ListItem>
            <ListItem>
              Collect static files
              <Commands>python manage.py collectstatic</Commands>
            </ListItem>
            <ListItem>
              Run the gunicorn server inside the virtual environment. Assuming
              your django app name is <Code colorScheme={"orange"}>azure</Code>
              <Commands>gunicorn azure.wsgi:application</Commands>
              <Image src={gunicornServiceImg} my={2} />
            </ListItem>
          </OrderedList>
        </section>
        <section id={"5.nginx"}>
          <Heading as={"h2"} mt={5}>
            Step 5: Nginx
          </Heading>
          <Image src={nginxLogo} my={2} />
          <Text mt={2}>
            Nginx [engine x] is reverse proxy HTTP web server. it was originally
            developed by Igor Sysoev. It has a market share of 41.17% among
            web-application-server market. Top companies like Netflix,
            WordPress, GitHub, and many others use Nginx.
          </Text>
          <OrderedList mt={3} p={2}>
            <ListItem>
              Install Nginx on the VM
              <Commands>
                sudo apt update
                <br />
                sudo apt install nginx
              </Commands>
            </ListItem>
            <ListItem>
              Start the Nginx service
              <Commands>
                sudo systemctl start nginx
                <br />
                sudo systemctl enable nginx
              </Commands>
            </ListItem>
            <ListItem>
              Create a new file <Code colorScheme={"orange"}>django</Code> in
              the <Code colorScheme={"orange"}>/etc/nginx/sites-available</Code>{" "}
              directory and add the below code to the file. Replace{" "}
              <Code colorScheme={"orange"}>{`{YOUR_IP_ADDRESS}`}</Code> with
              your IP address.
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
              <Image src={nginxConfigImg} my={2} />
            </ListItem>
            <ListItem>
              Create a symbolic link to the{" "}
              <Code colorScheme={"orange"}>sites-enabled</Code> directory
              <Commands>
                sudo ln -s /etc/nginx/sites-available/django
                /etc/nginx/sites-enabled
              </Commands>
            </ListItem>
            <ListItem>
              Test the Nginx configuration
              <Commands>sudo nginx -t</Commands>
              <Image src={nginxTestImg} my={2} />
            </ListItem>
            <ListItem>
              Restart the Nginx service
              <Commands>sudo systemctl restart nginx</Commands>
            </ListItem>
          </OrderedList>
        </section>

        <section id={"6.check-and-test-django-site"}>
          <Heading as="h2" mt={5}>
            6.Check & test django site
          </Heading>
          <Text mt={2}>
            Type your VM <CodeVariable>ip-address</CodeVariable> in the browser.
            If you face any error(s), stop the gunicorn service and change the
            environment variable <CodeVariable>DEBUG=True</CodeVariable> in{" "}
            <CodeVariable>settings.py</CodeVariable>
          </Text>
          <Image src={browserImg} mt={2} />
        </section>

        <section>
          <Heading as={"h2"} mt={2}>
            Conclusion
          </Heading>
          <Text mt={5}>
            In this article, we learned how to deploy a django web app on an
            Azure virtual machine. We created a virtual machine, configured the
            django settings for production, uploaded the code to the server, and
            configured Nginx to serve the django app. The steps can be
            replicated to deploy on other cloud providers such as Amazon web
            services(AWS), Google Cloud Platform(GCP) etc.
          </Text>
        </section>
      </Container>
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="Deploy Django Site on Azure, AWS, GCP Virtual Machine"
    description={"Deploy Django Site on Azure, AWS, GCP Virtual Machine using Nginx, Gunicorn, WhiteNoise, and Python Virtual Environment."}
    children={undefined}
  ></Seo>
)

export default DeployDjangoOnAzureVm
