# HMDA Homepage
The entrypoint to all things HMDA.

Information and code contained in this repository should be considered provisional and a work in progress unless otherwise indicated.

## Dependencies

* [yarn](https://yarnpkg.com)

## Install

Clone this repo and run the following:

```
yarn
```

## Run locally

After building your desired project, you can visit it by running a static webserver from the project root directory or running via docker:
`docker run -it -p "3000:80" -v "$(pwd):/usr/share/nginx/html" nginx:1.12`

## Deploy to Kubernetes (local)

1. Make sure that [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) is installed and configured for your system
2. Make sure that [minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/) is installed and configured. When properly installed, you should be able to do minikube dashboard to open up the kubernetes cluster dashboard in your browser. Make sure that kubectl is properly configured to point to minikube when working in local development mode.
3. Make sure that [Helm](https://helm.sh/) is installed, as well as Tiller, the server side component.  
4. Manually deploy the application to the Kubernetes cluster:

```shell
helm install --name hmda-homepage -f kubernetes/hmda-homepage/values.yaml kubernetes/hmda-homepage 
```

5. You should be able to access the `HMDA` homepage by issuing the following command: 

```shell
minikube service hmda-homepage
```
