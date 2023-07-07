// ========== Server
// import all modules
import http from 'http';

const server = http.createServer((req, res) => {
  if(req.method === 'GET' && req.url === '/api/users') {
    const users = [
      {
        id: 1,
        firstName: 'Sojung',
        lastName: 'Kim',
      },
      {
        id: 2,
        firstName: 'Yerin',
        lastName: 'Jung',
      },
      {
        id: 3,
        firstName: 'Eunbi',
        lastName: 'Jung',
      }
    ];

    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify({
      status: 200,
      message: 'Success get users',
      data: users
    }));
    res.end()
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify({
      status: 404,
      message: 'Not Found'
    }));
    res.end()
  }
});

server.listen(3000, () => {
  console.log('Server is running at port 3000');
});