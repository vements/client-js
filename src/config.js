/*
Copyright 2023 Monster Street Systems LLC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// NB: This is a generated file; any changes will be lost.

class Contact {
  constructor(name, email, url) {
    this.name = name;
    this.email = email;
    this.url = url;
  }

  static default() {
    return new Contact(
      "Vements Support Contact",
      "https://vements.io",
      "support@vements.io",
    );
  }
}

class License {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }

  static default() {
    return new License("MIT", "https://opensource.org/license/mit/");
  }
}

class ExternalDocs {
  constructor(description, url) {
    this.description = description;
    this.url = url;
  }

  static default() {
    return new ExternalDocs(
      "Vements REST API Documentation",
      "https://vements.io/docs",
    );
  }
}

class Server {
  constructor(url, description, variables, tags) {
    this.url = url;
    this.description = description;
    this.variables = variables;
    this.tags = tags;
  }
}

export class Config {
  constructor(
    title,
    version,
    description,
    termsOfService,
    contact,
    license,
    externalDocs,
    servers,
  ) {
    this.title = title;
    this.version = version;
    this.description = description;
    this.termsOfService = termsOfService;
    this.contact = contact;
    this.license = license;
    this.externalDocs = externalDocs;
    this.servers = servers;
  }

  static default() {
    return new Config(
      "Vements REST API",
      "1.0.3",
      "This specification describes the Vements REST API, its endpoints, and  the data structures used to communicate with it.",
      "https://vements.io/terms",
      Contact.default(),
      License.default(),
      ExternalDocs.default(),
      [
        new Server(
          "https://a.vements.io/{basePath}",
          "Production Server",
          {
            ["basePath"]: "api/rest/v1.0.3/",
          },
          ["production"],
        ),
        new Server(
          "http://api.localtest.me/{basePath}",
          "Development Server (Host)",
          {
            ["basePath"]: "api/rest/v1.0.3/",
          },
          ["development", "host", "full"],
        ),
        new Server(
          "http://localhost:9000/{basePath}",
          "Development Server (Host Substitute)",
          {
            ["basePath"]: "api/rest/v1.0.3/",
          },
          ["development", "host", "substitute"],
        ),
        new Server(
          "http://api-server-a:8080/{basePath}",
          "Development Server (Container)",
          {
            ["basePath"]: "api/rest/v1.0.3/",
          },
          ["development", "container", "full"],
        ),
        new Server(
          "http://substitute-server:9000/{basePath}",
          "Development Server (Container Substitute)",
          {
            ["basePath"]: "api/rest/v1.0.3/",
          },
          ["development", "container", "substitute"],
        ),
      ],
    );
  }

  serverUrl(tags) {
    for (const server of this.servers) {
      var matches = 0;
      for (const match of tags) {
        for (const tag of server.tags) {
          if (tag == match) {
            matches = matches + 1;
          }
        }
      }
      if (matches >= tags.length) {
        var url = server.url;
        for (const key in server.variables) {
          url = url.replace("{" + key + "}", server.variables[key]);
        }
        return url;
      }
    }
    return null;
  }
}

