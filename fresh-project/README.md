# DINO Mall on Azure

![Dino mall logo](https://raw.githubusercontent.com/antronic/dinosaur-deno-ts/main/fresh-project/content/Dino-mall-logo.png)

This project was created with Fresh. Fresh is a Deno project generator that is designed to be simple and easy to use. Fresh is a command line tool that generates a new Deno project with a simple project structure and a few useful scripts to help you get started.

---
You can run this project in a GitHub Codespace by clicking the button below:

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/antronic/dinosaur-deno-ts?quickstart=1)


You can learn more from https://fresh.deno.dev/docs/getting-started

### Pre-requisites
- [Deno](https://deno.land/manual/getting_started/installation)
- [Docker](https://docs.docker.com/get-docker/)
- [Azure account](https://azure.microsoft.com/en-us/free/)
- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)

### Usage

After you have installed the pre-requisites, you can run the following commands to get started:

To start the project, run the following command:
```git
deno task start
```

Then navigate to `http://localhost:8000` in your browser to see the project running.

You will see a page that looks like this:

![DINO Mall](https://raw.githubusercontent.com/antronic/dinosaur-deno-ts/main/fresh-project/content/Dino-mall-screenshot.png)


### Deploy to Azure App Service or Azure Functions

As I mentioned earlier in my talk, Azure App Service and Azure Functions does not support Deno out of the box.

However, we can customize the handler to run Deno or use Docker to deploy your Deno application to Azure App Service or Azure Functions.

<!-- Quote -->
> "I will update this README with the steps to deploy this project later."

In the meantime, you can learn more about both of methods from the following links:
- [Custom handlers in Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/functions-custom-handlers)
- [Deploy a custom container to Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/tutorial-custom-container?tabs=azure-cli&pivots=container-linux)