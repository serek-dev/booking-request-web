# Booking request web

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

It is a `web client` for backend API application
that can be find in this repository [Booking request web](https://github.com/serek-dev/booking-request-api). 

## Makefile

There is a `Makfile` command that contains all commonly used commands for this project.

Type in terminal: `make` to see a list.

```bash
fast                           Attempts to start existing containers
start                          Starts containers with build
stop                           Stops containers and removes network
tests_unit                     Executes unit tests in the way like CI&CD should do it
tests_unit_watch               Executes unit tests with volume binding and watch mode (needs `tests_unit` command to be executed firstly)
```

## Development server

Local instance will be run with `test` environment (configuration in Angular meaning) that won't use any external
resources like API calls. Mocked data will be used instead.
