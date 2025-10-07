const webdav = require('webdav-server').v2
const path = require('path')

const server = new webdav.WebDAVServer({
  port: 1900,
})

// Mount the local "shared" folder
const localPath = path.resolve('./shared')
server.setFileSystem(
  '/',
  new webdav.PhysicalFileSystem(localPath),
  (success) => {
    if (!success) console.error('Failed to mount the file system!')
  }
)

// Allow anonymous access (for old clients)
server.beforeRequest((ctx, next) => {
  ctx.user = server.options.httpAuthentication.defaultUser
  next()
})

server.start(() => {
  console.log('✅ WebDAV server running at http://0.0.0.0:1900/')
})
