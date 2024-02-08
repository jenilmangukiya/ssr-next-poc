We can execute the component in any nested way server (server -> client -> server -> server => client).

Just take in mind that The server side component is generated on the initial request not when it is executed.

It will not send request to server to execute the Component.

It will send the build to the clint and then the build will be hydrated to the page and will be executed accordingly.
