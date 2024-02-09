import * as React from "react"
import BlogLayout from "../../components/blog/BlogLayout"
import { Box, Heading, ListItem, OrderedList } from "@chakra-ui/react"
import BlogImage from "../../components/blog/BlogImage"

//@ts-ignore
import SSLImage from "../../images/blog/free-ssl-azure/ssl.jpg"
//@ts-ignore
import SSLWorkingImage from "../../images/blog/free-ssl-azure/ssl-working.jpg"
//@ts-ignore
import FolderImg from "../../images/blog/free-ssl-azure/folder.png"
//@ts-ignore
import webPageTest from "../../images/blog/free-ssl-azure/webpage-test.png"

import BlogHeading from "../../components/blog/BlogHeading"
import BlogSection from "../../components/blog/BlogSection"
import BlogLastUpdated from "../../components/blog/BlogLastUpdated"
import CodeVariable from "../../components/blog/codeVariable"
import BlogText from "../../components/blog/BlogText"
import Commands from "../../components/blog/commands"
import BlogList from "../../components/blog/BlogList"
import BlogListItem from "../../components/blog/BlogListItem"
import BlogLink from "../../components/blog/BlogLink"
import CodeBlock from "../../components/blog/CodeBlock"
import BlogContent, { BlogContentList } from "../../components/blog/BlogContent"

function FreeSslCertificateOnAzureAwsGcpVpsHosting() {
  const contentList: BlogContentList[] = [
    {
      title: "Introduction",
      url: "#introduction",
    },
    {
      title: "Deploy website on Virtual Machine(VM)",
      url: "#Deploy-website",
    },
    {
      title: "Install Nginx & Assign Domain Name",
      url: "#Install-nginx",
    },
    {
      title: "Install Certbot & Generate SSL Certificate",
      url: "#Install-certbot",
    },
    {
      title: "Conclusion",
      url: "#conclusion",
    },
  ]
  return (
    <>
      <BlogLayout>
        <Heading as="h1">
          Free SSL Certificate on Azure, AWS, GCP, Virtual Machine(VM) and VPS
          hosting websites
        </Heading>
        <BlogLastUpdated dateTime={"2024-02-08T12:30:00Z"} />
        <BlogImage src={SSLImage} alt={"certbot-free-ssl-certificate"} />
        <BlogContent contentList={contentList} />

        <BlogSection id={"introduction"}>
          <BlogHeading>Introduction</BlogHeading>
          <BlogText>
            In this article, we will learn about how to install free SSL
            certificate on Azure, AWS, GCP, Virtual Machine(VM) and VPS Linux
            hosting websites. I am using Ubuntu 22.04 LTS with{" "}
            <CodeVariable>Nginx</CodeVariable> on Azure, but you can use any
            other Linux distribution. For the sake of simplicity, I will deploy
            a static single page HTML site on the Virtual Machine(VM).
          </BlogText>
          <Heading as={"h3"} fontSize={"2xl"}>
            What is a SSL certificate
          </Heading>
          <BlogText>
            SSL (Secure Socket Layer) certificate is a digital certificate that
            is hosted on a website's origin server. It is used to establish
            secure communication between client computer and web server. Any
            website that uses SSL has "https" at the beginning of its URL.This
            is used prevent unauthorized access to the website and to encrypt
            the data that is being transmitted between the client and the
            server.
          </BlogText>
          <Box>
            <BlogImage src={SSLWorkingImage} alt={"ssl-working"} />
          </Box>
        </BlogSection>
        <BlogSection id={"Deploy-website"}>
          <BlogHeading>
            Upload code to Virtual Machine(VM) (Optional)
          </BlogHeading>
          <BlogText>
            First, we need to deploy a website on the Virtual Machine(VM). I am
            using a simple HTML site for this article. You can use your own site
            or webapp.
          </BlogText>
          <OrderedList p={2} my={2}>
            <ListItem>
              Create a new Virtual Machine(VM) on Azure, AWS, GCP or any other
              VPS hosting.
            </ListItem>
            <ListItem>Connect to the Virtual Machine(VM) using SSH.</ListItem>

            <ListItem>
              Create a new directory for the website and change the directory.
              <Commands>
                sudo mkdir sample-site <br />
                cd sample-site
              </Commands>
            </ListItem>
            <ListItem>
              (Optional) Clone the github repository or upload your website
              files to the directory.
              <Commands>
                sudo git clone
                https://github.com/code-with-saipraveeen/sample-site.git .
              </Commands>
              <BlogImage src={FolderImg} alt={"sample-site-folder"} />
            </ListItem>
          </OrderedList>
        </BlogSection>
        <BlogSection id={"Install-nginx"}>
          <BlogHeading>Install Nginx & Assign Domain Name</BlogHeading>
          <BlogText>
            Nginx [engine x] is reverse proxy HTTP web server. it was originally
            developed by Igor Sysoev. It has a market share of 41.17% among
            web-application-server market. Top companies like Netflix,
            WordPress, GitHub, and many others use Nginx.
          </BlogText>
          <BlogList type={"ordered"}>
            <BlogListItem>
              Install Nginx
              <Commands>
                sudo apt update <br />
                sudo apt install nginx
              </Commands>
            </BlogListItem>
            <BlogListItem>
              Start & Enable Nginx
              <Commands>
                sudo systemctl start nginx <br />
                sudo systemctl enable nginx
              </Commands>
            </BlogListItem>
            <BlogListItem>
              Check default <CodeVariable>domain-name</CodeVariable> of the
              Virtual Machine(VM). Add custom domain name to the Virtual
              Machine(VM) if you want to use your own domain name. Default
              domain name looks like this:
              <BlogList type={"unordered"}>
                <BlogListItem>
                  AWS -{" "}
                  <CodeVariable>
                    ec2-xx-xx-xx-xx.compute-1.amazonaws.com
                  </CodeVariable>
                </BlogListItem>
                <BlogListItem>
                  Azure -{" "}
                  <CodeVariable>
                    {`<custom-name>`}.eastus.cloudapp.azure.com
                  </CodeVariable>{" "}
                  (For Azure, you need to assign your own{" "}
                  <CodeVariable>{`custom name`}</CodeVariable> to the Virtual
                  Machine(VM)) in the Azure portal VM settings.
                </BlogListItem>
                <BlogListItem>
                  GCP -{" "}
                  <CodeVariable>
                    {`<instance-name>.<zone>.<project-id>.<region>.googleusercontent.com`}
                  </CodeVariable>
                </BlogListItem>
              </BlogList>
            </BlogListItem>

            <BlogListItem>
              (optional) If you want to use your own domain then you need to
              configure your DNS proivder to point to the Virtual Machine(VM) IP
              address. You can follow the below links to configure your DNS
              provider.
              <BlogList type={"unordered"}>
                <BlogListItem>
                  <BlogLink
                    href={
                      "https://docs.aws.amazon.com/amplify/latest/userguide/to-add-a-custom-domain-managed-by-a-third-party-dns-provider.html"
                    }
                  >
                    AWS
                  </BlogLink>
                </BlogListItem>
                <BlogListItem>
                  <BlogLink
                    href={
                      "https://learn.microsoft.com/en-us/azure/virtual-machines/custom-domain"
                    }
                  >
                    Azure
                  </BlogLink>
                </BlogListItem>
                <BlogListItem>
                  <BlogLink
                    href={
                      "https://cloud.google.com/compute/docs/instances/custom-hostname-vm"
                    }
                  >
                    GCP
                  </BlogLink>
                </BlogListItem>
              </BlogList>
            </BlogListItem>
            <BlogListItem>
              Check permission of the directory and add appropriate permission
              to the directory. Replace{" "}
              <CodeVariable>/home/sai/sample-site</CodeVariable> with your
              directory name.
              <Commands>
                sudo chown -R www-data:www-data /home/sai/sample-site <br />
                sudo chmod -R 755 /home/sai/sample-site
              </Commands>
            </BlogListItem>
            <BlogListItem>
              Add config file <CodeVariable>sample-site</CodeVariable> to Nginx
              to serve the website. If you are using your own domain name then
              replace the default domain name with your domain name. you can
              replace <CodeVariable>sample-site</CodeVariable> file with your
              own domain name or file name
              <Commands>
                sudo nano /etc/nginx/sites-available/sample-site
              </Commands>
              <CodeBlock language={"nginx"}>
                {`server {
  listen 80;
  listen [::]:80;
  
  server_name ec2-xx-xx-xx-xx.compute-1.amazonaws.com; # replace with your domain name
  root /home/sai/sample-site; # replace with your directory path
  index index.html;
  
  location / {
    try_files $uri $uri/ =404;
  }
}`}
              </CodeBlock>
            </BlogListItem>
            <BlogListItem>
              Create a symbolic link to the{" "}
              <CodeVariable>sample-site</CodeVariable> file
              <Commands>
                sudo ln -s /etc/nginx/sites-available/sample-site
                /etc/nginx/sites-enabled/
              </Commands>
            </BlogListItem>
            <BlogListItem>
              Check, Test and restart Nginx
              <Commands>
                sudo nginx -t <br />
                sudo systemctl restart nginx
              </Commands>
            </BlogListItem>
            <BlogListItem>
              Open the browser and check the website using the default domain
              name or your custom domain name.
              <BlogImage src={webPageTest} alt={"vm-webpage-test"} />
            </BlogListItem>
          </BlogList>
        </BlogSection>
        <BlogSection id={"Install-certbot"}>
          <BlogHeading>Install Certbot & Generate SSL Certificate</BlogHeading>
          <BlogText>
            Certbot is a free, open source tool for automatically using{" "}
            <BlogLink href={"https://letsencrypt.org/"}>Let's Encrypt</BlogLink>{" "}
            certificates on maunally installed web servers. It is developed and
            maintained by the Electronic Frontier Foundation (EFF), a nonprofit
            based in San Francisco, CA, that defends digital privacy, free
            speech, and innovation.
          </BlogText>
          <BlogList type={"ordered"}>
            <BlogListItem>
              Install Certbot on your Virtual Machine(VM)
              <Commands>
                sudo apt update <br />
                sudo apt install certbot
              </Commands>
            </BlogListItem>
            <BlogListItem>
              Generate SSL certificate using Certbot for Nginx web server.
              Replace <CodeVariable>vm-test.saipraveen.me</CodeVariable> with
              your domain name. It automatically updates the Nginx{" "}
              <CodeVariable>sample-site</CodeVariable> configuration file.
              <Commands>sudo certbot --nginx -d vm-test.saipraveen.me</Commands>
            </BlogListItem>
            <BlogListItem>
              Check the <CodeVariable>sample-site</CodeVariable> file
              <Commands>
                sudo nano /etc/nginx/sites-available/sample-site
              </Commands>
              <CodeBlock language={"nginx"}>
                {`server {

    server_name vm-test.saipraveen.me;

    root /home/sai/sample-site;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/vm-test.saipraveen.me/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/vm-test.saipraveen.me/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}

server {
    if ($host = vm-test.saipraveen.me) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    listen 80;

    server_name vm-test.saipraveen.me;
    return 404; # managed by Certbot


}
                `}
              </CodeBlock>
            </BlogListItem>
            <BlogListItem>
              Restart Nginx server and check your website using the domain name.
              <Commands>sudo systemctl restart nginx</Commands>
            </BlogListItem>
          </BlogList>
        </BlogSection>
        <BlogSection id={"conclusion"}>
          <BlogHeading>Conclusion</BlogHeading>
          <BlogText>
            In this article, we have learned how to add SSL certificate to
            website running Nginx web server on Virtual Machine(VM) using Certbot.
          </BlogText>
        </BlogSection>
      </BlogLayout>
    </>
  )
}

export default FreeSslCertificateOnAzureAwsGcpVpsHosting
