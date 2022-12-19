import React from "react";
import Container from "react-bootstrap/Container";
import Markdown from "react-markdown";
import Card from "react-bootstrap/Card";

const GrpcSeriesPart1 = () => {
  return (
    <Container className="px-xl-0">
      <h1 id="grpc-series-with-node.js---unary-rpc">
        gRPC Series with Node.js - Unary RPC
      </h1>
      <h2 id="what-is-grpc">What is gRPC?</h2>
      <p>
        According to the{" "}
        <a href="https://grpc.io/" target="_blank">
          grpc.io
        </a>{" "}
        <strong>
          <em>
            gRPC is a modern open source high performance Remote Procedure Call
            (RPC) framework that can run in any environment. It can efficiently
            connect services in and across data centers with pluggable support
            for load balancing, tracing, health checking and authentication. It
            is also applicable in last mile of distributed computing to connect
            devices, mobile applications and browsers to backend services.
          </em>
        </strong>
      </p>
      <p>
        This gRPC uses the HTTP/2 as underlying transport mechanism and it uses
        protocol buffers as a message format as explained in detail in this{" "}
        <a
          href="https://www.youtube.com/watch?v=Yw4rkaTc0f8&amp;t=2794s"
          target="_blank"
        >
          gRPC crash course
        </a>
      </p>
      <p>There are diffferent gRPC modes which are</p>
      <ul>
        <li>Unary RPC</li>
        <li>Server Streaming RPC</li>
        <li>Client streaming RPC</li>
        <li>Bidirectional streaming RPC</li>
      </ul>
      <p>
        In this article we will focus on Unary RPC, which is basically client
        send a request to the server and server process that request and send
        back the response after processing the request.
      </p>
      <h2 id="protocol-buffers">Protocol Buffers</h2>
      <p>
        Before writing the protocol buffers file we need to know what is
        protocol buffer Protocol buffers or protobuf for short is method of
        serialization structured data useful for transmitting data over the wire
        or storing the disk. There is very good protocol buffers crash course
        which gives detail information about the protocol buffers, and it is
        highly recommended to watch this{" "}
        <a
          href="https://www.youtube.com/watch?v=46O73On0gyI&amp;t=1716s"
          target="_blank"
        >
          video
        </a>
      </p>
      <Card className="mt-2 mb-4">
        <Card.Body>
          <Card.Text>
            <Markdown>{`
   
  \`\`\`protobuf
  // protocol/square.proto
  syntax = "proto3";
  
  package square.v1;
  
  message squareRequest {
      double number = 1;
  }
  
  message squareResponse {
      double number=1;
  }
  
  
  
  // Services for the system
  service SquareService {
      rpc square(squareRequest) returns (squareResponse) {}
  }
  \`\`\`
  `}</Markdown>
          </Card.Text>
        </Card.Body>
      </Card>
      <p>
        The protocol buffer structure begins by defining the syntax, which in
        this case is proto3. Then, the package name is defined, using
        "square.v1" as the name. The Request and Response structure for the
        square service are also defined. Once the protocol buffer file has been
        prepared, it can be used.
      </p>
      <p>
        Before writing server and client code using Nodejs, we need to follow
        these steps to set up our project:
      </p>

      <code className="sourceCode bash">npm init -y</code>

      <p>
        To install the necessary dependencies for the project, run the following
        command in the terminal:
      </p>
      <code className="sourceCode bash">
        npm install grpc @grpc/proto-loader
      </code>
      <p>
        Once the installation is completed, we will create a file called
        server.js and it will be as follows:
      </p>
      <h2 id="server-server.js">Server (server.js)</h2>
      <Card className="mt-2 mb-4">
        <Card.Body>
          <Card.Text>
            <Markdown>{`
  
  \`\`\`javascript
  // importing dependencies
  const grpc = require("grpc");
  const path = require("path");
  const protoLoader = require("@grpc/proto-loader");
  
  // package definition
  const packageDefinition = protoLoader.loadSync(
    path.resolve(__dirname, "protocol/square.proto"),
    {
      keepCase: true,
      longs: String,
      enums: String,
      default: true,
      oneofs: true,
    }
  );
  
  const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
  
  // Get the package name
  const squarePackage = protoDescriptor.square.v1;
  
  // calculate the square of the number
  const square = (call, callback) => {
    const number = call.request.number;
    const square_number = Math.pow(number, 2);
    response = { number: square_number };
    error = null;
    callback(error, response);
  };
  
  // Creating the Server
  const server = new grpc.Server();
  // Adding services to the server
  server.addService(squarePackage.SquareService.service, {
    square: square,
  });
  
  // Binding the server
  const HOST = "localhost";
  const PORT = 90052;
  server.bind(\`\${HOST}\`, grpc.ServerCredentials.createInsecure());\${HOST}:\${PORT}\`, grpc.ServerCredentials.createInsecure());
  
  // starting the grpc server
  server.start();
  console.log(\`\$Server started on \${HOST}:\${PORT}\`);
  \`\`\`
  `}</Markdown>
          </Card.Text>
        </Card.Body>
      </Card>
      <p>
        we first imported the necessary dependencies for our server. Then, we
        loaded the protobuf file, square.proto, which contains the service
        package we will use to calculate the square of a given number. We
        created a function called square that performs this calculation.
        Finally, we created a server and started it on localhost:90052.
      </p>
      <p>To start the server, use the following command:</p>

      <code className="sourceCode bash">node server.js</code>

      <p>We will then obtain the following output:</p>

      <code className="sourceCode bash">Server started on localhost:90052</code>

      <p>
        Once the server is prepared, we can proceed to write the client-side
        code, as shown below
      </p>
      <h2 id="client-client.js">Client (client.js)</h2>
      <Card className="mt-2 mb-4">
        <Card.Body>
          <Card.Text>
            <Markdown>{`
  
  \`\`\`javascript
  // importing dependencies
  const grpc = require("grpc");
  const path = require("path");
  const protoLoader = require("@grpc/proto-loader");
  
  // package definition
  const packageDefinition = protoLoader.loadSync(
    path.resolve(__dirname, "protocol/square.proto"),
    {
      keepCase: true,
      longs: String,
      enums: String,
      default: true,
      oneofs: true,
    }
  );
  
  const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
  
  // Get the package name
  const squarePackage = protoDescriptor.square.v1;
  
  // connect the client to the server
  const HOST = "localhost";
  const PORT = 90052;
  const client = new squarePackage.SquareService(
    \`\${HOST}:\${PORT}\`,
    grpc.credentials.createInsecure()
  );
  
  // make the request for server to calculate the square of the number
  const request = { number: 10.2 };
  
  // make request, and get the response
  client.square(request, (err, response) => {
    console.log(response.number);
  });
  \`\`\`
  `}</Markdown>
          </Card.Text>
        </Card.Body>
      </Card>

      <p>
        The structure in this file is the same as in server.js, except that we
        are now sending requests to the server.
      </p>
      <p>
        Once our client is prepared, we can send the request to the server by
        running the following command on a separate terminal:
      </p>
      <code className="sourceCode bash">$ node client.js</code>
      <p>and we will have the following output:</p>

      <code className="sourceCode bash">104.0399999999</code>
    </Container>
  );
};

export default GrpcSeriesPart1;
