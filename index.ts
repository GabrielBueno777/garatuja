const srv = Bun.serve({
    port: 3000,
    routes: {
        "/hello": () => new Response(`
                  <!DOCTYPE html>
      <html>
        <head>
          <title>--Eu sou o melhor, posso nao ser, mas na minha cabeca eu sou io melhor--</title>
          <style>
            body { font-family: Arial; text-align: center; margin-top: 50px; }
            button { padding: 10px 20px; font-size: 16px; }
          </style>
        </head>
        <body>
          <h1>Se voce esta lendo, aproveite suas 24 horas </h1>
          <p>aproveitou?</p>
          <button onclick="clicar()">Clique aqui</button>

          <script>
            function clicar() {
              alert(" Se nao aproveitou, agora acabou");
            }
          </script>
        </body>
      </html>
      <script>
  function clicar() {
    window.location.href = "/nova";
  }
</script>
    `, {
      headers: { "Content-Type": "text/html" }
    })
  },
fetch(request) {
    return new Response("pois agora sao mais 24 horas")
}
})
console.log(`server rodando em http://localhost:${srv.port}`)
