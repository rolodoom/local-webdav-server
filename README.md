# Local WebDAV Server

A simple **local WebDAV server** built with Node.js and Docker, for testing and file uploads (e.g., from an iPad). Files are stored in a local `shared/` folder.

## Status

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/rolodoom/local-webdav-server/master/LICENSE)

## Features

- Runs in Docker for easy start/stop.
- `shared/` folder is mounted locally; files persist outside the container.
- Compatible with older clients (iPad 3, legacy apps).
- Simple setup, no authentication required (adjustable if needed).

## Setup

1. **Clone the repository:**

```bash
git clone <repo-url>
cd local-webdav-server
```

2. **Create your `.env` file** from the template:

```bash
cp .env.example .env
```

Edit `.env` as needed (e.g., adjust `UID` and `GID` for your local user):

```env
UID=1000
GID=1000
```

3. **Ensure the `shared/` folder exists** (should already be in the repo with `.gitkeep`):

```bash
mkdir -p shared
```

4. **Build and start the server:**

```bash
docker compose build
docker compose up -d
```

5. **Stop the server:**

```bash
docker compose down
```

## Accessing the Server

- Use your host machine to test: `http://localhost:8080/`
- From other devices on your LAN, use your machine’s IP: `http://<host-ip>:8080/`
- Files uploaded will appear in the local `shared/` folder.

## Notes

- The `shared/` folder **should not be committed** to the repository. Only `.gitkeep` is kept for structure.
- Running the container with your local `UID`/`GID` ensures files are created with the correct permissions.
- `.env.example` is a template — always create a `.env` file for your personal config

## Bugs and Issues

Have a bug or an issue with this template? [Open a new issue](https://github.com/rolodoom/local-webdav-server/issues) here on GitHub.

## License

This code in this repository is released under the [MIT](https://raw.githubusercontent.com/rolodoom/local-webdav-server/master/LICENSE) license, which means you can use it for any purpose, even for commercial projects. In other words, do what you want with it. The only requirement with the MIT License is that the license and copyright notice must be provided with the software.
