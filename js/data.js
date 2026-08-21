window.ROADMAP=[
  {
    "id": "phase-01",
    "phase": "Phase 01",
    "title": "HTTP & API Foundations",
    "icon": "\ud83c\udf10",
    "weight": 12,
    "topics": [
      {
        "id": "topic-001",
        "number": 1,
        "title": "HTTP request & response",
        "priority": "must",
        "weight": 2,
        "description": "Understand request, response, client and server.",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview"
      },
      {
        "id": "topic-002",
        "number": 2,
        "title": "HTTP methods",
        "priority": "must",
        "weight": 2,
        "description": "GET, POST, PUT, PATCH and DELETE.",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods"
      },
      {
        "id": "topic-003",
        "number": 3,
        "title": "Status codes",
        "priority": "must",
        "weight": 1.5,
        "description": "2xx, 4xx and 5xx responses and when to use them.",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status"
      },
      {
        "id": "topic-004",
        "number": 4,
        "title": "Headers, route & query parameters",
        "priority": "must",
        "weight": 1.5,
        "description": "Learn where request data is carried.",
        "url": "https://learn.microsoft.com/en-us/aspnet/core/fundamentals/http-requests?view=aspnetcore-10.0"
      },
      {
        "id": "topic-005",
        "number": 5,
        "title": "HTTPS / TLS basics",
        "priority": "must",
        "weight": 1,
        "description": "Why encrypted transport matters.",
        "url": "https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Transport_Layer_Security"
      },
      {
        "id": "topic-006",
        "number": 6,
        "title": "REST fundamentals",
        "priority": "must",
        "weight": 2,
        "description": "Resources, statelessness and REST conventions.",
        "url": "https://learn.microsoft.com/en-us/aspnet/core/fundamentals/apis?view=aspnetcore-10.0"
      },
      {
        "id": "topic-007",
        "number": 7,
        "title": "Controllers and routing",
        "priority": "must",
        "weight": 1,
        "description": "Controller actions, routes and model binding.",
        "url": "https://learn.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-10.0"
      },
      {
        "id": "topic-008",
        "number": 8,
        "title": "Minimal APIs",
        "priority": "must",
        "weight": 1,
        "description": "Route handlers and endpoint groups.",
        "url": "https://learn.microsoft.com/en-us/aspnet/core/fundamentals/minimal-apis?view=aspnetcore-10.0"
      }
    ]
  },
  {
    "id": "phase-02",
    "phase": "Phase 02",
    "title": "API Design & Quality",
    "icon": "\ud83e\udde9",
    "weight": 8,
    "topics": [
      {
        "id": "topic-009",
        "number": 9,
        "title": "Request and response DTOs",
        "priority": "must",
        "weight": 1.5,
        "description": "Keep API contracts separate from entities.",
        "url": "https://learn.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-10.0"
      },
      {
        "id": "topic-010",
        "number": 10,
        "title": "Validation",
        "priority": "must",
        "weight": 1.5,
        "description": "Validate input before business processing.",
        "url": "https://learn.microsoft.com/en-us/aspnet/core/mvc/models/validation?view=aspnetcore-10.0"
      },
      {
        "id": "topic-011",
        "number": 11,
        "title": "Global error handling",
        "priority": "must",
        "weight": 1.5,
        "description": "Handle exceptions consistently.",
        "url": "https://learn.microsoft.com/en-us/aspnet/core/fundamentals/error-handling?view=aspnetcore-10.0"
      },
      {
        "id": "topic-012",
        "number": 12,
        "title": "ProblemDetails",
        "priority": "must",
        "weight": 1,
        "description": "Use standard problem responses.",
        "url": "https://learn.microsoft.com/en-us/aspnet/core/fundamentals/error-handling?view=aspnetcore-10.0"
      },
      {
        "id": "topic-013",
        "number": 13,
        "title": "Pagination",
        "priority": "should",
        "weight": 0.75,
        "description": "Return large collections safely.",
        "url": "https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design"
      },
      {
        "id": "topic-014",
        "number": 14,
        "title": "Filtering and sorting",
        "priority": "should",
        "weight": 0.75,
        "description": "Allow clients to narrow and order results.",
        "url": "https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design"
      },
      {
        "id": "topic-015",
        "number": 15,
        "title": "API versioning",
        "priority": "should",
        "weight": 0.5,
        "description": "Understand how APIs evolve.",
        "url": "https://learn.microsoft.com/en-us/aspnet/core/fundamentals/http-requests?view=aspnetcore-10.0"
      },
      {
        "id": "topic-016",
        "number": 16,
        "title": "Content negotiation",
        "priority": "good",
        "weight": 0.25,
        "description": "Understand representations beyond the default JSON flow.",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Content_negotiation"
      },
      {
        "id": "topic-017",
        "number": 17,
        "title": "HATEOAS",
        "priority": "advanced",
        "weight": 0.25,
        "description": "Conceptual knowledge is enough for most .NET APIs.",
        "url": "https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design"
      }
    ]
  },
  {
    "id": "phase-03",
    "phase": "Phase 03",
    "title": "API Documentation & Security",
    "icon": "\ud83d\udd10",
    "weight": 10,
    "topics": [
      {
        "id": "topic-018",
        "number": 18,
        "title": "OpenAPI / Swagger",
        "priority": "must",
        "weight": 1.5,
        "description": "Document and test your API contract.",
        "url": "https://learn.microsoft.com/en-us/aspnet/core/fundamentals/openapi/overview?view=aspnetcore-10.0"
      },
      {
        "id": "topic-019",
        "number": 19,
        "title": "Authentication",
        "priority": "must",
        "weight": 1.5,
        "description": "Understand identity verification.",
        "url": "https://learn.microsoft.com/en-us/aspnet/core/security/authentication/?view=aspnetcore-10.0"
      },
      {
        "id": "topic-020",
        "number": 20,
        "title": "Authorization",
        "priority": "must",
        "weight": 1,
        "description": "Roles, policies and permissions.",
        "url": "https://learn.microsoft.com/en-us/aspnet/core/security/authorization/introduction?view=aspnetcore-10.0"
      },
      {
        "id": "topic-021",
        "number": 21,
        "title": "JWT",
        "priority": "must",
        "weight": 1.5,
        "description": "Token structure, validation and expiration.",
        "url": "https://learn.microsoft.com/en-us/aspnet/core/security/authentication/configure-jwt-bearer-authentication?view=aspnetcore-10.0"
      },
      {
        "id": "topic-022",
        "number": 22,
        "title": "Refresh tokens",
        "priority": "must",
        "weight": 1,
        "description": "Refresh access without repeated login.",
        "url": "https://learn.microsoft.com/en-us/aspnet/core/security/authentication/?view=aspnetcore-10.0"
      },
      {
        "id": "topic-023",
        "number": 23,
        "title": "CORS",
        "priority": "must",
        "weight": 0.75,
        "description": "Control browser cross-origin access.",
        "url": "https://learn.microsoft.com/en-us/aspnet/core/security/cors?view=aspnetcore-10.0"
      },
      {
        "id": "topic-024",
        "number": 24,
        "title": "OAuth 2.0",
        "priority": "should",
        "weight": 1,
        "description": "Delegated authorization and third-party login.",
        "url": "https://oauth.net/2/"
      },
      {
        "id": "topic-025",
        "number": 25,
        "title": "OpenID Connect",
        "priority": "should",
        "weight": 0.5,
        "description": "Authentication layer on OAuth-style flows.",
        "url": "https://openid.net/developers/how-connect-works/"
      },
      {
        "id": "topic-026",
        "number": 26,
        "title": "API Keys",
        "priority": "should",
        "weight": 0.5,
        "description": "Simple service authentication where appropriate.",
        "url": "https://learn.microsoft.com/en-us/azure/api-management/api-management-subscriptions"
      },
      {
        "id": "topic-027",
        "number": 27,
        "title": "CSRF and secrets management",
        "priority": "good",
        "weight": 0.75,
        "description": "Understand CSRF plus User Secrets, environment variables and Key Vault.",
        "url": "https://learn.microsoft.com/en-us/aspnet/core/security/anti-request-forgery?view=aspnetcore-10.0"
      }
    ]
  },
  {
    "id": "phase-04",
    "phase": "Phase 04",
    "title": "Calling Other APIs",
    "icon": "\ud83d\udd04",
    "weight": 5,
    "topics": [
      {
        "id": "topic-028",
        "number": 28,
        "title": "HttpClient basics",
        "priority": "must",
        "weight": 1.5,
        "description": "Send HTTP requests and read responses.",
        "url": "https://learn.microsoft.com/en-us/dotnet/fundamentals/networking/http/httpclient"
      },
      {
        "id": "topic-029",
        "number": 29,
        "title": "IHttpClientFactory",
        "priority": "must",
        "weight": 1.5,
        "description": "Use named and typed clients correctly.",
        "url": "https://learn.microsoft.com/en-us/dotnet/core/extensions/httpclient-factory"
      },
      {
        "id": "topic-030",
        "number": 30,
        "title": "Headers and authentication",
        "priority": "must",
        "weight": 0.75,
        "description": "Send bearer tokens, API keys and custom headers.",
        "url": "https://learn.microsoft.com/en-us/dotnet/fundamentals/networking/http/httpclient"
      },
      {
        "id": "topic-031",
        "number": 31,
        "title": "Timeout and cancellation",
        "priority": "should",
        "weight": 0.75,
        "description": "Avoid waiting forever on dependencies.",
        "url": "https://learn.microsoft.com/en-us/dotnet/core/resilience/http-resilience"
      },
      {
        "id": "topic-032",
        "number": 32,
        "title": "External API error handling",
        "priority": "should",
        "weight": 0.5,
        "description": "Handle failures without assuming every response is successful.",
        "url": "https://learn.microsoft.com/en-us/dotnet/core/resilience/http-resilience"
      }
    ]
  },
  {
    "id": "phase-05",
    "phase": "Phase 05",
    "title": "Alternative API Technologies",
    "icon": "\ud83d\udd0c",
    "weight": 7,
    "topics": [
      {
        "id": "topic-033",
        "number": 33,
        "title": "GraphQL: problem it solves",
        "priority": "must",
        "weight": 1,
        "description": "Know over-fetching, under-fetching and client-selected fields.",
        "url": "https://graphql.org/learn/"
      },
      {
        "id": "topic-034",
        "number": 34,
        "title": "GraphQL schema, query and mutation",
        "priority": "must",
        "weight": 1,
        "description": "Core GraphQL concepts.",
        "url": "https://graphql.org/learn/schema/"
      },
      {
        "id": "topic-035",
        "number": 35,
        "title": "GraphQL resolvers and nested data",
        "priority": "should",
        "weight": 0.75,
        "description": "Understand how data is resolved.",
        "url": "https://graphql.org/learn/execution/"
      },
      {
        "id": "topic-036",
        "number": 36,
        "title": "GraphQL variables and input types",
        "priority": "should",
        "weight": 0.5,
        "description": "Pass structured input safely.",
        "url": "https://graphql.org/learn/queries/"
      },
      {
        "id": "topic-037",
        "number": 37,
        "title": "GraphQL DataLoader / subscriptions",
        "priority": "good",
        "weight": 0.25,
        "description": "Learn when optimization or live updates are needed.",
        "url": "https://graphql.org/learn/serving-over-http/"
      },
      {
        "id": "topic-038",
        "number": 38,
        "title": "gRPC: problem it solves",
        "priority": "must",
        "weight": 1,
        "description": "Know where gRPC fits compared with REST.",
        "url": "https://learn.microsoft.com/en-us/aspnet/core/grpc/?view=aspnetcore-10.0"
      },
      {
        "id": "topic-039",
        "number": 39,
        "title": "gRPC proto contracts and Protobuf",
        "priority": "must",
        "weight": 1,
        "description": "Understand services and message contracts.",
        "url": "https://learn.microsoft.com/en-us/aspnet/core/grpc/basics?view=aspnetcore-10.0"
      },
      {
        "id": "topic-040",
        "number": 40,
        "title": "gRPC unary and streaming calls",
        "priority": "should",
        "weight": 0.75,
        "description": "Know request/response and streaming modes.",
        "url": "https://learn.microsoft.com/en-us/aspnet/core/grpc/services?view=aspnetcore-10.0"
      },
      {
        "id": "topic-041",
        "number": 41,
        "title": "SOAP and WSDL",
        "priority": "good",
        "weight": 0.75,
        "description": "Recognize legacy enterprise SOAP integrations.",
        "url": "https://learn.microsoft.com/en-us/dotnet/framework/wcf/feature-details/interoperability-and-integration"
      }
    ]
  },
  {
    "id": "phase-06",
    "phase": "Phase 06",
    "title": "Real-Time Communication",
    "icon": "\u26a1",
    "weight": 8,
    "topics": [
      {
        "id": "topic-042",
        "number": 42,
        "title": "WebSocket fundamentals",
        "priority": "must",
        "weight": 1.25,
        "description": "Persistent two-way connections.",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"
      },
      {
        "id": "topic-043",
        "number": 43,
        "title": "SignalR: why and when",
        "priority": "must",
        "weight": 0.75,
        "description": "Understand what SignalR adds for .NET apps.",
        "url": "https://learn.microsoft.com/en-us/aspnet/core/signalr/introduction?view=aspnetcore-10.0"
      },
      {
        "id": "topic-044",
        "number": 44,
        "title": "SignalR Hub and client",
        "priority": "must",
        "weight": 1.5,
        "description": "Create hubs and connect clients.",
        "url": "https://learn.microsoft.com/en-us/aspnet/core/signalr/hubs?view=aspnetcore-10.0"
      },
      {
        "id": "topic-045",
        "number": 45,
        "title": "Server-to-client and client-to-server",
        "priority": "must",
        "weight": 1.25,
        "description": "Send live messages both directions.",
        "url": "https://learn.microsoft.com/en-us/aspnet/core/signalr/hubs?view=aspnetcore-10.0"
      },
      {
        "id": "topic-046",
        "number": 46,
        "title": "Groups and connection lifecycle",
        "priority": "should",
        "weight": 1,
        "description": "Target groups and manage connections.",
        "url": "https://learn.microsoft.com/en-us/aspnet/core/signalr/groups?view=aspnetcore-10.0"
      },
      {
        "id": "topic-047",
        "number": 47,
        "title": "Authentication and reconnection",
        "priority": "should",
        "weight": 0.75,
        "description": "Secure and recover connections.",
        "url": "https://learn.microsoft.com/en-us/aspnet/core/signalr/authn-and-authz?view=aspnetcore-10.0"
      },
      {
        "id": "topic-048",
        "number": 48,
        "title": "SSE",
        "priority": "good",
        "weight": 0.75,
        "description": "One-way server-to-client streaming.",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events"
      },
      {
        "id": "topic-049",
        "number": 49,
        "title": "Long polling and scaling SignalR",
        "priority": "good",
        "weight": 0.75,
        "description": "Understand fallback patterns and scaling options.",
        "url": "https://learn.microsoft.com/en-us/aspnet/core/signalr/scale?view=aspnetcore-10.0"
      }
    ]
  },
  {
    "id": "phase-07",
    "phase": "Phase 07",
    "title": "Webhooks",
    "icon": "\ud83d\udd17",
    "weight": 6,
    "topics": [
      {
        "id": "topic-050",
        "number": 50,
        "title": "Webhook concept vs normal API call",
        "priority": "must",
        "weight": 1,
        "description": "Understand event-driven callbacks from another system.",
        "url": "https://docs.github.com/en/webhooks"
      },
      {
        "id": "topic-051",
        "number": 51,
        "title": "Create a webhook endpoint",
        "priority": "must",
        "weight": 1,
        "description": "Receive external event payloads.",
        "url": "https://docs.github.com/en/webhooks"
      },
      {
        "id": "topic-052",
        "number": 52,
        "title": "Payload and event types",
        "priority": "must",
        "weight": 0.75,
        "description": "Identify what happened and parse event data.",
        "url": "https://docs.github.com/en/webhooks"
      },
      {
        "id": "topic-053",
        "number": 53,
        "title": "Shared secret and HMAC signature",
        "priority": "must",
        "weight": 1.5,
        "description": "Verify authenticity without exposing the secret.",
        "url": "https://docs.github.com/en/webhooks/using-webhooks/validating-webhook-deliveries"
      },
      {
        "id": "topic-054",
        "number": 54,
        "title": "Retries, duplicates and idempotency",
        "priority": "should",
        "weight": 1,
        "description": "Process repeated deliveries safely.",
        "url": "https://stripe.com/docs/webhooks"
      },
      {
        "id": "topic-055",
        "number": 55,
        "title": "Timestamp and replay protection",
        "priority": "should",
        "weight": 0.5,
        "description": "Reject stale or replayed requests.",
        "url": "https://docs.github.com/en/webhooks/using-webhooks/validating-webhook-deliveries"
      },
      {
        "id": "topic-056",
        "number": 56,
        "title": "Event ordering and IP allowlisting",
        "priority": "good",
        "weight": 0.25,
        "description": "Useful provider-specific protections.",
        "url": "https://docs.github.com/en/webhooks"
      }
    ]
  },
  {
    "id": "phase-08",
    "phase": "Phase 08",
    "title": "Docker & Containers",
    "icon": "\ud83d\udc33",
    "weight": 8,
    "topics": [
      {
        "title": "Why Docker?",
        "priority": "must",
        "weight": 1,
        "description": "Understand what Docker solves and why containers are useful.",
        "url": "https://docs.docker.com/get-started/docker-overview/",
        "id": "topic-057",
        "number": 57
      },
      {
        "title": "Containers vs Virtual Machines",
        "priority": "must",
        "weight": 0.75,
        "description": "Understand the difference between containers and full virtual machines.",
        "url": "https://docs.docker.com/get-started/docker-overview/",
        "id": "topic-058",
        "number": 58
      },
      {
        "title": "Images vs Containers",
        "priority": "must",
        "weight": 0.75,
        "description": "Learn the core Docker building blocks.",
        "url": "https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-an-image/",
        "id": "topic-059",
        "number": 59
      },
      {
        "title": "Run your first container",
        "priority": "must",
        "weight": 0.75,
        "description": "Pull and run an existing image.",
        "url": "https://docs.docker.com/get-started/introduction/get-docker-desktop/",
        "id": "topic-060",
        "number": 60
      },
      {
        "title": "Essential Docker commands",
        "priority": "must",
        "weight": 1,
        "description": "Learn docker pull, run, ps, logs, exec, stop and rm.",
        "url": "https://docs.docker.com/reference/cli/docker/",
        "id": "topic-061",
        "number": 61
      },
      {
        "title": "Ports and port mapping",
        "priority": "must",
        "weight": 0.5,
        "description": "Expose a container application to your machine.",
        "url": "https://docs.docker.com/get-started/docker-concepts/running-containers/publishing-ports/",
        "id": "topic-062",
        "number": 62
      },
      {
        "title": "Dockerfile",
        "priority": "must",
        "weight": 1,
        "description": "Define how your own application image is built.",
        "url": "https://docs.docker.com/reference/dockerfile/",
        "id": "topic-063",
        "number": 63
      },
      {
        "title": "Dockerize an ASP.NET Core API",
        "priority": "must",
        "weight": 1.25,
        "description": "Build and run your .NET API inside a container.",
        "url": "https://learn.microsoft.com/en-us/dotnet/core/docker/build-container?tabs=windows",
        "id": "topic-064",
        "number": 64
      },
      {
        "title": "Environment variables in containers",
        "priority": "must",
        "weight": 0.5,
        "description": "Pass configuration without hardcoding secrets.",
        "url": "https://docs.docker.com/compose/how-tos/environment-variables/",
        "id": "topic-065",
        "number": 65
      },
      {
        "title": "Volumes",
        "priority": "must",
        "weight": 0.5,
        "description": "Persist data outside a container lifecycle.",
        "url": "https://docs.docker.com/engine/storage/volumes/",
        "id": "topic-066",
        "number": 66
      },
      {
        "title": "Docker Compose basics",
        "priority": "should",
        "weight": 0.75,
        "description": "Run multiple services together from one configuration.",
        "url": "https://docs.docker.com/compose/",
        "id": "topic-067",
        "number": 67
      },
      {
        "title": "API + SQL Server with Compose",
        "priority": "should",
        "weight": 0.5,
        "description": "Run a realistic multi-container .NET setup.",
        "url": "https://docs.docker.com/compose/",
        "id": "topic-068",
        "number": 68
      },
      {
        "title": "API + RabbitMQ + Redis with Compose",
        "priority": "should",
        "weight": 0.5,
        "description": "Prepare for the messaging and caching phases.",
        "url": "https://docs.docker.com/compose/",
        "id": "topic-069",
        "number": 69
      },
      {
        "title": "Container networking",
        "priority": "should",
        "weight": 0.25,
        "description": "Understand how containers communicate by service name.",
        "url": "https://docs.docker.com/network/",
        "id": "topic-070",
        "number": 70
      },
      {
        "title": "Multi-stage builds",
        "priority": "good",
        "weight": 0.25,
        "description": "Create smaller production images.",
        "url": "https://docs.docker.com/build/building/multi-stage/",
        "id": "topic-071",
        "number": 71
      },
      {
        "title": ".dockerignore and image optimization",
        "priority": "good",
        "weight": 0.25,
        "description": "Keep images cleaner and smaller.",
        "url": "https://docs.docker.com/build/concepts/context/#dockerignore-files",
        "id": "topic-072",
        "number": 72
      },
      {
        "title": "Kubernetes basics",
        "priority": "advanced",
        "weight": 0,
        "description": "Only learn deeply if your work requires container orchestration.",
        "url": "https://kubernetes.io/docs/concepts/overview/",
        "id": "topic-073",
        "number": 73
      }
    ]
  },
  {
    "id": "phase-09",
    "phase": "Phase 09",
    "title": "Messaging Fundamentals",
    "icon": "\ud83d\udce8",
    "weight": 7,
    "topics": [
      {
        "id": "topic-074",
        "number": 74,
        "title": "Why asynchronous messaging",
        "priority": "must",
        "weight": 1,
        "description": "Know why services should not always wait for each other.",
        "url": "https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/event-driven"
      },
      {
        "id": "topic-075",
        "number": 75,
        "title": "Producer, consumer and broker",
        "priority": "must",
        "weight": 1,
        "description": "Core messaging vocabulary and responsibilities.",
        "url": "https://www.rabbitmq.com/tutorials"
      },
      {
        "id": "topic-076",
        "number": 76,
        "title": "Message and queue",
        "priority": "must",
        "weight": 1,
        "description": "How work is stored and processed.",
        "url": "https://www.rabbitmq.com/tutorials/tutorial-one-dotnet"
      },
      {
        "id": "topic-077",
        "number": 77,
        "title": "Acknowledgement",
        "priority": "must",
        "weight": 1,
        "description": "Understand successful and failed processing.",
        "url": "https://www.rabbitmq.com/docs/confirms"
      },
      {
        "id": "topic-078",
        "number": 78,
        "title": "Queue vs publish/subscribe",
        "priority": "must",
        "weight": 1,
        "description": "One consumer path versus multiple subscribers.",
        "url": "https://www.rabbitmq.com/tutorials"
      },
      {
        "id": "topic-079",
        "number": 79,
        "title": "Serialization and message contracts",
        "priority": "should",
        "weight": 0.75,
        "description": "Design stable messages between services.",
        "url": "https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design"
      },
      {
        "id": "topic-080",
        "number": 80,
        "title": "Message ordering and idempotent consumers",
        "priority": "should",
        "weight": 0.75,
        "description": "Handle distributed delivery realities.",
        "url": "https://learn.microsoft.com/en-us/azure/architecture/patterns/idempotent-consumer"
      },
      {
        "id": "topic-081",
        "number": 81,
        "title": "Exactly-once delivery myths",
        "priority": "good",
        "weight": 0.5,
        "description": "Understand practical delivery guarantees.",
        "url": "https://learn.microsoft.com/en-us/azure/architecture/patterns/"
      }
    ]
  },
  {
    "id": "phase-10",
    "phase": "Phase 10",
    "title": "RabbitMQ",
    "icon": "\ud83d\udc07",
    "weight": 12,
    "topics": [
      {
        "id": "topic-082",
        "number": 82,
        "title": "RabbitMQ architecture",
        "priority": "must",
        "weight": 1,
        "description": "Broker, producer, consumer and queue together.",
        "url": "https://www.rabbitmq.com/tutorials"
      },
      {
        "id": "topic-083",
        "number": 83,
        "title": "Connection and channel",
        "priority": "must",
        "weight": 1,
        "description": "Understand the .NET client communication model.",
        "url": "https://www.rabbitmq.com/client-libraries/dotnet-api-guide"
      },
      {
        "id": "topic-084",
        "number": 84,
        "title": "Publish a message",
        "priority": "must",
        "weight": 1,
        "description": "Create a producer.",
        "url": "https://www.rabbitmq.com/tutorials/tutorial-one-dotnet"
      },
      {
        "id": "topic-085",
        "number": 85,
        "title": "Consume a message",
        "priority": "must",
        "weight": 1,
        "description": "Create a consumer.",
        "url": "https://www.rabbitmq.com/tutorials/tutorial-one-dotnet"
      },
      {
        "id": "topic-086",
        "number": 86,
        "title": "Manual acknowledgement",
        "priority": "must",
        "weight": 1,
        "description": "Confirm processing at the correct point.",
        "url": "https://www.rabbitmq.com/docs/confirms"
      },
      {
        "id": "topic-087",
        "number": 87,
        "title": "Exchanges",
        "priority": "should",
        "weight": 1,
        "description": "Understand routing before choosing exchange types.",
        "url": "https://www.rabbitmq.com/tutorials"
      },
      {
        "id": "topic-088",
        "number": 88,
        "title": "Direct, fanout and topic exchanges",
        "priority": "should",
        "weight": 1.5,
        "description": "Learn exchange types in this order.",
        "url": "https://www.rabbitmq.com/tutorials"
      },
      {
        "id": "topic-089",
        "number": 89,
        "title": "Routing keys and bindings",
        "priority": "should",
        "weight": 1,
        "description": "Control where messages go.",
        "url": "https://www.rabbitmq.com/tutorials"
      },
      {
        "id": "topic-090",
        "number": 90,
        "title": "Publish / subscribe",
        "priority": "should",
        "weight": 0.5,
        "description": "One event can reach multiple consumers.",
        "url": "https://www.rabbitmq.com/tutorials/tutorial-three-dotnet"
      },
      {
        "id": "topic-091",
        "number": 91,
        "title": "Retry and dead-letter queues",
        "priority": "should",
        "weight": 1,
        "description": "Handle poison and transient failures.",
        "url": "https://www.rabbitmq.com/docs/dlx"
      },
      {
        "id": "topic-092",
        "number": 92,
        "title": "Prefetch, TTL and priority",
        "priority": "good",
        "weight": 0.75,
        "description": "Useful tuning and delivery features.",
        "url": "https://www.rabbitmq.com/docs"
      },
      {
        "id": "topic-093",
        "number": 93,
        "title": "Ordering and delayed messages",
        "priority": "good",
        "weight": 0.25,
        "description": "Understand limitations and patterns.",
        "url": "https://www.rabbitmq.com/docs"
      },
      {
        "id": "topic-094",
        "number": 94,
        "title": "Clustering, federation and tuning",
        "priority": "advanced",
        "weight": 0,
        "description": "Deep infrastructure knowledge when production needs it.",
        "url": "https://www.rabbitmq.com/docs/clustering"
      }
    ]
  },
  {
    "id": "phase-11",
    "phase": "Phase 11",
    "title": "Azure Service Bus",
    "icon": "\u2601\ufe0f",
    "weight": 6,
    "topics": [
      {
        "id": "topic-095",
        "number": 95,
        "title": "Why Azure Service Bus",
        "priority": "must",
        "weight": 1,
        "description": "Know when managed messaging is useful.",
        "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview"
      },
      {
        "id": "topic-096",
        "number": 96,
        "title": "Queues, sender and receiver",
        "priority": "must",
        "weight": 1.5,
        "description": "Basic point-to-point messaging.",
        "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-dotnet-get-started-with-queues"
      },
      {
        "id": "topic-097",
        "number": 97,
        "title": "Topics and subscriptions",
        "priority": "should",
        "weight": 1.25,
        "description": "Managed publish/subscribe.",
        "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-dotnet-how-to-use-topics-subscriptions"
      },
      {
        "id": "topic-098",
        "number": 98,
        "title": "Message lock and completion",
        "priority": "should",
        "weight": 1,
        "description": "Control safe processing.",
        "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-transfers-locks-settlement"
      },
      {
        "id": "topic-099",
        "number": 99,
        "title": "Retry and dead-letter queue",
        "priority": "should",
        "weight": 0.75,
        "description": "Handle failures safely.",
        "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-dead-letter-queues"
      },
      {
        "id": "topic-100",
        "number": 100,
        "title": "Sessions and advanced features",
        "priority": "good",
        "weight": 0.5,
        "description": "Use only when ordering or workflows require them.",
        "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-sessions"
      }
    ]
  },
  {
    "id": "phase-12",
    "phase": "Phase 12",
    "title": "Event Streaming",
    "icon": "\ud83d\udce1",
    "weight": 5,
    "topics": [
      {
        "id": "topic-101",
        "number": 101,
        "title": "Event streaming vs messaging",
        "priority": "must",
        "weight": 1,
        "description": "Know queueing versus durable event streams.",
        "url": "https://kafka.apache.org/intro"
      },
      {
        "id": "topic-102",
        "number": 102,
        "title": "Kafka topics, partitions and offsets",
        "priority": "should",
        "weight": 1.5,
        "description": "Core Kafka model.",
        "url": "https://kafka.apache.org/documentation/"
      },
      {
        "id": "topic-103",
        "number": 103,
        "title": "Consumer groups and replay",
        "priority": "should",
        "weight": 1,
        "description": "Understand scalable consumption and replay.",
        "url": "https://kafka.apache.org/documentation/"
      },
      {
        "id": "topic-104",
        "number": 104,
        "title": "Azure Event Hubs",
        "priority": "good",
        "weight": 1,
        "description": "Understand Azure high-throughput event ingestion.",
        "url": "https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-about"
      },
      {
        "id": "topic-105",
        "number": 105,
        "title": "Kafka internals and tuning",
        "priority": "advanced",
        "weight": 0.5,
        "description": "Deep dive only if you work with Kafka heavily.",
        "url": "https://kafka.apache.org/documentation/"
      }
    ]
  },
  {
    "id": "phase-13",
    "phase": "Phase 13",
    "title": "Background Processing",
    "icon": "\u2699\ufe0f",
    "weight": 5,
    "topics": [
      {
        "id": "topic-106",
        "number": 106,
        "title": "BackgroundService",
        "priority": "must",
        "weight": 1.5,
        "description": "Run long-lived background work in a .NET host.",
        "url": "https://learn.microsoft.com/en-us/dotnet/core/extensions/workers"
      },
      {
        "id": "topic-107",
        "number": 107,
        "title": "Worker Service",
        "priority": "must",
        "weight": 1,
        "description": "Create dedicated workers.",
        "url": "https://learn.microsoft.com/en-us/dotnet/core/extensions/workers"
      },
      {
        "id": "topic-108",
        "number": 108,
        "title": "Cancellation and graceful shutdown",
        "priority": "must",
        "weight": 0.75,
        "description": "Stop work safely.",
        "url": "https://learn.microsoft.com/en-us/dotnet/core/extensions/workers"
      },
      {
        "id": "topic-109",
        "number": 109,
        "title": "Scheduled jobs",
        "priority": "should",
        "weight": 0.75,
        "description": "Run work at defined times.",
        "url": "https://www.quartz-scheduler.net/documentation/"
      },
      {
        "id": "topic-110",
        "number": 110,
        "title": "Hangfire",
        "priority": "should",
        "weight": 0.75,
        "description": "Background and recurring jobs with persistence.",
        "url": "https://docs.hangfire.io/"
      },
      {
        "id": "topic-111",
        "number": 111,
        "title": "Quartz.NET",
        "priority": "good",
        "weight": 0.25,
        "description": "Advanced scheduling option.",
        "url": "https://www.quartz-scheduler.net/documentation/"
      }
    ]
  },
  {
    "id": "phase-14",
    "phase": "Phase 14",
    "title": "Reliability & Resilience",
    "icon": "\ud83d\udee1\ufe0f",
    "weight": 6,
    "topics": [
      {
        "id": "topic-112",
        "number": 112,
        "title": "Timeout",
        "priority": "must",
        "weight": 1,
        "description": "Set sensible limits on dependency calls.",
        "url": "https://learn.microsoft.com/en-us/dotnet/core/resilience/http-resilience"
      },
      {
        "id": "topic-113",
        "number": 113,
        "title": "Retry",
        "priority": "must",
        "weight": 1.25,
        "description": "Retry transient failures carefully.",
        "url": "https://learn.microsoft.com/en-us/dotnet/core/resilience/http-resilience"
      },
      {
        "id": "topic-114",
        "number": 114,
        "title": "Idempotency",
        "priority": "must",
        "weight": 1,
        "description": "Make repeated operations safe.",
        "url": "https://learn.microsoft.com/en-us/azure/architecture/patterns/idempotent-consumer"
      },
      {
        "id": "topic-115",
        "number": 115,
        "title": "Circuit breaker",
        "priority": "should",
        "weight": 1,
        "description": "Stop hammering a failing dependency.",
        "url": "https://learn.microsoft.com/en-us/dotnet/core/resilience/http-resilience"
      },
      {
        "id": "topic-116",
        "number": 116,
        "title": "Fallback",
        "priority": "should",
        "weight": 0.75,
        "description": "Provide controlled degradation.",
        "url": "https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker"
      },
      {
        "id": "topic-117",
        "number": 117,
        "title": "Bulkhead isolation",
        "priority": "good",
        "weight": 0.5,
        "description": "Prevent one dependency from exhausting everything.",
        "url": "https://learn.microsoft.com/en-us/azure/architecture/patterns/bulkhead"
      },
      {
        "id": "topic-118",
        "number": 118,
        "title": "Advanced resilience strategy design",
        "priority": "advanced",
        "weight": 0.5,
        "description": "Combine strategies carefully rather than blindly.",
        "url": "https://learn.microsoft.com/en-us/dotnet/core/resilience/"
      }
    ]
  },
  {
    "id": "phase-15",
    "phase": "Phase 15",
    "title": "Caching & Redis",
    "icon": "\ud83d\udcbe",
    "weight": 5,
    "topics": [
      {
        "id": "topic-119",
        "number": 119,
        "title": "Why caching and cache-aside",
        "priority": "must",
        "weight": 1.25,
        "description": "Understand hit, miss, expiration and invalidation.",
        "url": "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside"
      },
      {
        "id": "topic-120",
        "number": 120,
        "title": "In-memory cache",
        "priority": "must",
        "weight": 1,
        "description": "Cache inside one application instance.",
        "url": "https://learn.microsoft.com/en-us/aspnet/core/performance/caching/memory?view=aspnetcore-10.0"
      },
      {
        "id": "topic-121",
        "number": 121,
        "title": "Distributed cache",
        "priority": "should",
        "weight": 1,
        "description": "Share cached data across instances.",
        "url": "https://learn.microsoft.com/en-us/aspnet/core/performance/caching/distributed?view=aspnetcore-10.0"
      },
      {
        "id": "topic-122",
        "number": 122,
        "title": "Redis basics",
        "priority": "should",
        "weight": 1.25,
        "description": "Use Redis as a distributed cache.",
        "url": "https://redis.io/docs/latest/"
      },
      {
        "id": "topic-123",
        "number": 123,
        "title": "Cache invalidation and advanced Redis",
        "priority": "good",
        "weight": 0.5,
        "description": "Learn deeper patterns when the application needs them.",
        "url": "https://redis.io/docs/latest/"
      }
    ]
  },
  {
    "id": "phase-16",
    "phase": "Phase 16",
    "title": "Gateway & Networking",
    "icon": "\ud83c\udf10",
    "weight": 5,
    "topics": [
      {
        "id": "topic-124",
        "number": 124,
        "title": "Reverse proxy",
        "priority": "must",
        "weight": 1,
        "description": "Understand forwarding requests to backend services.",
        "url": "https://learn.microsoft.com/en-us/aspnet/core/fundamentals/servers/yarp/getting-started?view=aspnetcore-10.0"
      },
      {
        "id": "topic-125",
        "number": 125,
        "title": "API Gateway",
        "priority": "should",
        "weight": 1.25,
        "description": "Know aggregation and a single entry point for services.",
        "url": "https://learn.microsoft.com/en-us/azure/architecture/patterns/gateway"
      },
      {
        "id": "topic-126",
        "number": 126,
        "title": "YARP basics",
        "priority": "should",
        "weight": 0.75,
        "description": "Practical .NET reverse proxy implementation.",
        "url": "https://learn.microsoft.com/en-us/aspnet/core/fundamentals/servers/yarp/getting-started?view=aspnetcore-10.0"
      },
      {
        "id": "topic-127",
        "number": 127,
        "title": "Load balancing",
        "priority": "should",
        "weight": 1,
        "description": "Distribute traffic across instances.",
        "url": "https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/load-balancing-overview"
      },
      {
        "id": "topic-128",
        "number": 128,
        "title": "Rate limiting",
        "priority": "must",
        "weight": 0.75,
        "description": "Protect endpoints from excessive requests.",
        "url": "https://learn.microsoft.com/en-us/aspnet/core/performance/rate-limit?view=aspnetcore-10.0"
      },
      {
        "id": "topic-129",
        "number": 129,
        "title": "Service discovery",
        "priority": "good",
        "weight": 0.25,
        "description": "Know how services locate each other.",
        "url": "https://learn.microsoft.com/en-us/dotnet/aspire/service-discovery/overview"
      }
    ]
  },
  {
    "id": "phase-17",
    "phase": "Phase 17",
    "title": "Observability",
    "icon": "\ud83d\udcca",
    "weight": 5,
    "topics": [
      {
        "id": "topic-130",
        "number": 130,
        "title": "Logging",
        "priority": "must",
        "weight": 1.25,
        "description": "Log useful application events.",
        "url": "https://learn.microsoft.com/en-us/dotnet/core/extensions/logging"
      },
      {
        "id": "topic-131",
        "number": 131,
        "title": "Structured logging",
        "priority": "must",
        "weight": 0.75,
        "description": "Store searchable properties, not only strings.",
        "url": "https://learn.microsoft.com/en-us/dotnet/core/extensions/logging"
      },
      {
        "id": "topic-132",
        "number": 132,
        "title": "Health checks",
        "priority": "must",
        "weight": 1,
        "description": "Expose application and dependency health.",
        "url": "https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/health-checks?view=aspnetcore-10.0"
      },
      {
        "id": "topic-133",
        "number": 133,
        "title": "Metrics",
        "priority": "should",
        "weight": 1,
        "description": "Measure throughput, errors and latency.",
        "url": "https://opentelemetry.io/docs/concepts/signals/metrics/"
      },
      {
        "id": "topic-134",
        "number": 134,
        "title": "Distributed tracing / OpenTelemetry",
        "priority": "should",
        "weight": 1,
        "description": "Follow requests across services.",
        "url": "https://opentelemetry.io/docs/concepts/signals/traces/"
      }
    ]
  },
  {
    "id": "phase-18",
    "phase": "Phase 18",
    "title": "Distributed Systems & Architecture",
    "icon": "\ud83c\udfd7\ufe0f",
    "weight": 6,
    "topics": [
      {
        "id": "topic-135",
        "number": 135,
        "title": "Monolith vs modular monolith",
        "priority": "must",
        "weight": 1,
        "description": "Understand complexity before jumping to microservices.",
        "url": "https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/"
      },
      {
        "id": "topic-136",
        "number": 136,
        "title": "Microservices trade-offs",
        "priority": "must",
        "weight": 1,
        "description": "Know both benefits and operational costs.",
        "url": "https://learn.microsoft.com/en-us/dotnet/architecture/microservices/"
      },
      {
        "id": "topic-137",
        "number": 137,
        "title": "Service boundaries and communication",
        "priority": "must",
        "weight": 1,
        "description": "Define ownership and choose sync or async communication.",
        "url": "https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/"
      },
      {
        "id": "topic-138",
        "number": 138,
        "title": "Event-driven architecture",
        "priority": "should",
        "weight": 0.75,
        "description": "Build around events when decoupling helps.",
        "url": "https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/event-driven"
      },
      {
        "id": "topic-139",
        "number": 139,
        "title": "Eventual consistency",
        "priority": "should",
        "weight": 0.75,
        "description": "Accept that distributed data may not update instantly.",
        "url": "https://learn.microsoft.com/en-us/azure/architecture/patterns/"
      },
      {
        "id": "topic-140",
        "number": 140,
        "title": "Distributed transactions",
        "priority": "good",
        "weight": 0.5,
        "description": "Understand why cross-service transactions are hard.",
        "url": "https://learn.microsoft.com/en-us/azure/architecture/patterns/"
      },
      {
        "id": "topic-141",
        "number": 141,
        "title": "Saga pattern",
        "priority": "good",
        "weight": 0.5,
        "description": "Coordinate distributed operations with compensating actions.",
        "url": "https://learn.microsoft.com/en-us/azure/architecture/patterns/saga"
      },
      {
        "id": "topic-142",
        "number": 142,
        "title": "CQRS",
        "priority": "should",
        "weight": 0.25,
        "description": "Use when read/write complexity justifies separation.",
        "url": "https://learn.microsoft.com/en-us/azure/architecture/patterns/cqrs"
      },
      {
        "id": "topic-143",
        "number": 143,
        "title": "Event sourcing",
        "priority": "advanced",
        "weight": 0.25,
        "description": "Advanced persistence pattern; not a default choice.",
        "url": "https://learn.microsoft.com/en-us/azure/architecture/patterns/event-sourcing"
      }
    ]
  },
  {
    "id": "phase-19",
    "phase": "Phase 19",
    "title": "Testing",
    "icon": "\ud83e\uddea",
    "weight": 6,
    "topics": [
      {
        "title": "Unit testing fundamentals",
        "priority": "must",
        "weight": 1.25,
        "description": "Test business logic in isolation.",
        "url": "https://learn.microsoft.com/en-us/dotnet/core/testing/",
        "id": "topic-144",
        "number": 144
      },
      {
        "title": "xUnit",
        "priority": "must",
        "weight": 1,
        "description": "Create practical .NET unit tests.",
        "url": "https://xunit.net/",
        "id": "topic-145",
        "number": 145
      },
      {
        "title": "Mocking dependencies",
        "priority": "must",
        "weight": 1,
        "description": "Mock external dependencies and services.",
        "url": "https://github.com/devlooped/moq",
        "id": "topic-146",
        "number": 146
      },
      {
        "title": "Integration testing",
        "priority": "should",
        "weight": 1.25,
        "description": "Test APIs and infrastructure working together.",
        "url": "https://learn.microsoft.com/en-us/aspnet/core/test/integration-tests?view=aspnetcore-10.0",
        "id": "topic-147",
        "number": 147
      },
      {
        "title": "Test database strategy",
        "priority": "should",
        "weight": 0.75,
        "description": "Use realistic and isolated data for tests.",
        "url": "https://learn.microsoft.com/en-us/ef/core/testing/",
        "id": "topic-148",
        "number": 148
      },
      {
        "title": "Test coverage and quality gates",
        "priority": "good",
        "weight": 0.75,
        "description": "Use coverage as a signal, not the goal itself.",
        "url": "https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-code-coverage",
        "id": "topic-149",
        "number": 149
      }
    ]
  },
  {
    "id": "phase-20",
    "phase": "Phase 20",
    "title": "CI/CD & Delivery",
    "icon": "\ud83d\ude80",
    "weight": 6,
    "topics": [
      {
        "title": "What CI/CD solves",
        "priority": "must",
        "weight": 0.75,
        "description": "Understand automated build, test and deployment pipelines.",
        "url": "https://learn.microsoft.com/en-us/devops/deliver/what-is-continuous-delivery",
        "id": "topic-150",
        "number": 150
      },
      {
        "title": "Build and test pipeline",
        "priority": "must",
        "weight": 1.25,
        "description": "Automatically restore, build and test your .NET application.",
        "url": "https://docs.github.com/en/actions",
        "id": "topic-151",
        "number": 151
      },
      {
        "title": "GitHub Actions or Azure Pipelines basics",
        "priority": "must",
        "weight": 1.25,
        "description": "Understand one pipeline system well.",
        "url": "https://docs.github.com/en/actions",
        "id": "topic-152",
        "number": 152
      },
      {
        "title": "Environment configuration",
        "priority": "must",
        "weight": 0.75,
        "description": "Separate development, staging and production settings.",
        "url": "https://learn.microsoft.com/en-us/aspnet/core/fundamentals/environments?view=aspnetcore-10.0",
        "id": "topic-153",
        "number": 153
      },
      {
        "title": "Secrets in CI/CD",
        "priority": "must",
        "weight": 0.75,
        "description": "Store credentials outside source code.",
        "url": "https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions",
        "id": "topic-154",
        "number": 154
      },
      {
        "title": "Deployment pipeline",
        "priority": "should",
        "weight": 0.75,
        "description": "Deploy after validation rather than manually copying files.",
        "url": "https://learn.microsoft.com/en-us/azure/devops/pipelines/",
        "id": "topic-155",
        "number": 155
      },
      {
        "title": "Branch and PR checks",
        "priority": "should",
        "weight": 0.5,
        "description": "Protect main branches with automated validation.",
        "url": "https://docs.github.com/en/pull-requests",
        "id": "topic-156",
        "number": 156
      }
    ]
  },
  {
    "id": "phase-21",
    "phase": "Phase 21",
    "title": "Deployment & Production Basics",
    "icon": "\u2601\ufe0f",
    "weight": 6,
    "topics": [
      {
        "title": "Configuration and appsettings",
        "priority": "must",
        "weight": 1,
        "description": "Understand .NET configuration providers and environments.",
        "url": "https://learn.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-10.0",
        "id": "topic-157",
        "number": 157
      },
      {
        "title": "Secrets and Key Vault concepts",
        "priority": "must",
        "weight": 1,
        "description": "Keep production secrets out of code.",
        "url": "https://learn.microsoft.com/en-us/azure/key-vault/general/overview",
        "id": "topic-158",
        "number": 158
      },
      {
        "title": "Deploy an ASP.NET Core API",
        "priority": "must",
        "weight": 1.25,
        "description": "Understand a practical production deployment.",
        "url": "https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/?view=aspnetcore-10.0",
        "id": "topic-159",
        "number": 159
      },
      {
        "title": "Azure App Service basics",
        "priority": "should",
        "weight": 1,
        "description": "Useful managed hosting knowledge for .NET APIs.",
        "url": "https://learn.microsoft.com/en-us/azure/app-service/overview",
        "id": "topic-160",
        "number": 160
      },
      {
        "title": "Database migrations in deployment",
        "priority": "should",
        "weight": 0.75,
        "description": "Handle schema changes safely.",
        "url": "https://learn.microsoft.com/en-us/ef/core/managing-schemas/migrations/",
        "id": "topic-161",
        "number": 161
      },
      {
        "title": "Production logging and monitoring",
        "priority": "should",
        "weight": 0.75,
        "description": "Connect logs, health and diagnostics in production.",
        "url": "https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview",
        "id": "topic-162",
        "number": 162
      },
      {
        "title": "Blue-green / canary deployment",
        "priority": "good",
        "weight": 0.25,
        "description": "Know safer deployment strategies.",
        "url": "https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/deployment-strategies",
        "id": "topic-163",
        "number": 163
      }
    ]
  }
];