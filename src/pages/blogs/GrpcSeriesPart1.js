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
        The protocol buffer structure is first we define the syntax which is
        proto3 in this case, and then we define the package name and we use
        square.v1 as the name. The we define Request and Response structure for
        our square service. Once we have protocol buffer file ready we can start
        using it.
      </p>
      <p>
        We use Nodejs for writing server and client, before writing we need to
        set our project using the following steps:
      </p>

      <code className="sourceCode bash">npm init -y</code>

      <p>
        Once project is setup we install the required dependencies by running
        the following command on terminal:
      </p>
      <code className="sourceCode bash">
        npm install grpc @grpc/proto-loader
      </code>
      <p>
        Once installation is finished we are going to write server.js file, and
        is giving below
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
        In server.js we imported necessary dependencies, then we loaded the
        protobuf file which is square.proto, and after that we get the service
        package. As we are going to get a number and it will return the square
        of the number we have the function square which calculate the square.
        And after that we created a server and then it is started on
        localhost:90052.
      </p>
      <p>
        Once the server is ready, we can run the server using the following
        command:
      </p>

      <code className="sourceCode bash">node server.js</code>

      <p>and we will have following output:</p>

      <code className="sourceCode bash">Server started on localhost:90052</code>

      <p>
        Once the server is ready, we can write the client side code and is given
        below
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
        We have teh same structure as we have in server.js, except now we are
        sending request to the server.
      </p>
      <p>
        once our client is ready, we can send the request to the server by
        running the following command on another terminal:
      </p>
      <code className="sourceCode bash">$ node client.js</code>
      <p>and we will have the following output:</p>

      <code className="sourceCode bash">104.0399999999</code>
    </Container>
  );
};

export default GrpcSeriesPart1;
