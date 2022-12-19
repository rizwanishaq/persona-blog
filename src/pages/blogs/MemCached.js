import React from "react";
import Container from "react-bootstrap/Container";
import Markdown from "react-markdown";
import Card from "react-bootstrap/Card";

const MemCached = () => {
  return (
    <Container className="px-xl-0">
      <h1 id="memcached">Memcached</h1>
      <p>
        I was searching for alternatives to Redis and discovered that Memcached
        is a good option for simple in-memory key value store operations. During
        my research, I came across a helpful crash course on the Memcached
        architecture by{" "}
        <a href="https://www.youtube.com/watch?v=NCePGsRZFus" target="_blank">
          Hussein Nasser
        </a>{" "}
        on{" "}
        <a
          href="https://www.youtube.com/c/HusseinNasser-software-engineering"
          target="_blank"
        >
          YouTube.
        </a>{" "}
        {""}
        This{" "}
        <a
          href="https://www.youtube.com/c/HusseinNasser-software-engineering"
          target="_blank"
        >
          {" "}
          video{" "}
        </a>{" "}
        provided detailed information on the pros and cons of Memcached and I
        highly recommend it for those interested in software engineering and
        databases.
      </p>
      <p>
        So, what is Memcached? According to the{" "}
        <a href="https://www.memcached.org/" target="_blank">
          Memcached website
        </a>
        ,
      </p>
      <blockquote>
        <p>
          “
          <strong>
            Free &amp; open source, high-performance, distributed memory object
            caching system
          </strong>
          , generic in nature, but intended for use in speeding up dynamic web
          applications by alleviating database load.
          <br />
          <br /> Memcached is an in-memory key-value store for small chunks of
          arbitrary data (strings, objects) from results of database calls, API
          calls, or page rendering.”
        </p>
      </blockquote>
      <p>
        It is best to understand Memcached by implementing it in a simple
        example using Node.js. Before writing the code, we need to start the
        Memcached server. An easy way to do this is through Docker, which is
        available on various operating systems including Ubuntu 22.04. To start
        the server using Docker, run the following command in the terminal:"
      </p>
      <code className="sourceCode bash">
        $ docker run --name memcachedserver -p 11211:11211 -d memcached
      </code>
      <p>
        This will start the Memcached server on port 11211. To check if Docker
        is running, use the following command:
      </p>
      <code className="sourceCode bash">$ docker ps</code>
      <p>
        With the Memcached server now running, we can access it using Node.js.
        If you don't have Node.js installed on your machine, please do so before
        proceeding.
      </p>
      <p>Let's create a folder called 'MemcachedCrashCourse'</p>
      <code className="sourceCode bash">
        $ mkdir MamcachedCrashCourse <br />$ cd MamcachedCrashCourse
      </code>
      <p>
        After creating the folder, run the following command to start the
        project and install the necessary packages:
      </p>
      <code className="sourceCode bash">
        $ npm init -y npm install memcached
      </code>
      <p>
        After installing the necessary packages, create a new file called
        'index.js' using the following command:
      </p>
      <code className="sourceCode bash">$ touch index.js</code>
      <p>In the index.js file, add the following lines of code:</p>
      <Card className="mt-2 mb-4">
        <Card.Body>
          <Card.Text>
            <Markdown>{`
  \`\`\`js
  // index.js
  const os = require("os");
  const MEMCACHED = require("memcached");
  const serverPool = new MEMCACHED([\`\${os.hostname()}:11211\`]);

  const write = () => {
    // writing to the memcached server
    serverPool.set("foo", "bar", 3600, (error) => {
      if (error) {
        console.log(error);
      }
    });
  };
  
  // we first write the data to the memcached server
  write();
  
  const read = () => {
    // read the data from the memcached server
    serverPool.get("foo", (error, data) => {
      if (error) {
        console.log(error);
      }
      console.log(data);
    });
  };
  
  // After writing we will read the data from the memcached server
  read();
  \`\`\`
  `}</Markdown>
          </Card.Text>
        </Card.Body>
      </Card>

      <p>
        In the code above, we imported the os and memcached packages and
        connected to the cluster on hostname:11211
      </p>
      <code className="sourceCode bash">
        const serverPool = new MEMCACHED(os.hostname():11211)
      </code>
      <p>
        The write function writes the value "bar" to the key "foo" in the
        Memcached server, while the read function retrieves the value "bar"
        associated with the key "foo". To run the index.js file, use the
        following command:
      </p>
      <code className="sourceCode bash">$ node index.js</code>
      <p>we will have the output bar.</p>
      <p>
        I hope this simple example demonstrates how to use Memcached in a
        Node.js application without any additional configuration.
      </p>
    </Container>
  );
};

export default MemCached;
