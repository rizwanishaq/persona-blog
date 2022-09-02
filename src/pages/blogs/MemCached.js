import React from "react";
import Container from "react-bootstrap/Container";

const MemCached = () => {
  return (
    <Container className="px-xl-0">
      <h1 id="memcached">Memcached</h1>
      <p>
        I was looking for the redis alternative and found that memcahced is one
        of the them. So instead of looking other alternative, I just checked the
        memcahced and feel that it’s a good alternative for simple in-memory key
        value store operations. And during this researching process I found one
        very interesting crash course on Memcached architecture{" "}
        <a href="https://www.youtube.com/watch?v=NCePGsRZFus" target="_blank">
          video
        </a>{" "}
        from the{" "}
        <a
          href="https://www.youtube.com/c/HusseinNasser-software-engineering"
          target="_blank"
        >
          Hussein Nasser youtube channel
        </a>{" "}
        which explain everything in detail its pros and cons. I highly recommend
        this{" "}
        <a
          href="https://www.youtube.com/c/HusseinNasser-software-engineering"
          target="_blank"
        >
          channel
        </a>
        , you will get lots of information related to software engineering,
        databases etc. Basically What I am trying to explain in this article is
        basically taken from that{" "}
        <a href="https://www.youtube.com/watch?v=NCePGsRZFus" target="_blank">
          video
        </a>
        .
      </p>
      <p>
        so first question is what is Memcahced? The answer according to{" "}
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
        Instead of going into theory about memcached, it is better to watch the{" "}
        <a href="https://www.youtube.com/watch?v=NCePGsRZFus" target="_blank">
          video
        </a>
        , I will directly implement it in the nodejs, and try to understand how
        it works with simple example.
      </p>
      <p>
        Before writing the code, we need to start memcached server, and docker
        is the best option for us to start a simple server. I assume that docker
        is available on your machine. I am using ubuntu 22.04 and ideally it
        should work on other operating systems as well.
      </p>
      <p>
        First step is to start server with docker using the following command on
        terminal
      </p>
      <code className="sourceCode bash">
        $ docker run --name memcachedserver -p 11211:11211 -d memcached
      </code>
      <p>
        and we will have the memcachedserver running on port 11211. We can see
        that if docker is running or not using the following command
      </p>
      <code className="sourceCode bash">$ docker ps</code>
      <p>
        Now as our memcached server is ready we can use it, and we will access
        it using nodejs. I assume that you have nodejs installed on your
        machine.
      </p>
      <p>we create a folder named MamcachedCrashCourse</p>
      <code className="sourceCode bash">
        $ mkdir MamcachedCrashCourse <br />$ cd MamcachedCrashCourse
      </code>
      <p>
        once folder is created, we will run the following command to start our
        project, and install required packages.
      </p>
      <code className="sourceCode bash">
        $ npm init -y npm install memcached
      </code>
      <p>
        once packages are installed, we will create a new file with name
        index.js using following command
      </p>
      <code className="sourceCode bash">$ touch index.js</code>
      <p>and write the following lines in index.js</p>
      <img src="i/code.png" alt="code" className="img-fluid mt-30 mt-md-0" />
      <p>
        In the code above we first bring the packages, which are os and
        memcached, and then we connected to the cluster which is connected to
        the hostname:11211
      </p>

      <code class="sourceCode bash">
        const serverPool = new MEMCACHED(os.hostname():11211)
      </code>
      <p>
        The write function write bar value to the foo key to the memcached
        server, while read function read the foo key and subsequently we will
        have bar value. Running the index.js file using the following command
      </p>
      <code class="sourceCode bash">$ node index.js</code>
      <p>we will have the output bar.</p>
      <p>
        Hope this simple example, will show how to use memcached in our nodejs
        application without any additional configuration.
      </p>
    </Container>
  );
};

export default MemCached;
