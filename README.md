## What is this?
This repository contains an example of a simple Express app hosted on a Debian server, as well as an NGINX reverse proxy on a CentOS server.

This demonstrates how one can use several tools to automatically generate a basic server network, such as:

* Docker
* Express
* GitHub Actions

## Make targets
Several `make` commands can be ran from the root directory of this repo for various purposes.
### Setup
Project dependencies can be installed with `make install`.
### Docker
Running `make build` will build the Docker images.
Running `make up` will deploy the Docker images locally _(as long as you've built the images first!)_.
### Testing
Unit tests for the `greeter` Docker container can be ran with `make unit-test` from the root directory of this repo.
Integration tests for the composed Docker images can be ran with `make int-test` from the root directory of this repo. This command automatically deploys the containers to test against.

## What's next?
Next steps are to deploy to an AWS infrastructure using Terraform.