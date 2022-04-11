const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM customer', (err, customers) => {
     if (err) {
      res.json(err);
     }
     res.json(customers);
     console.log(customers);
    });
  });
};

controller.save = (req, res) => {
    const data = req.body;
    console.log(req.body)
    req.getConnection((err, connection) => {
      const query = connection.query('INSERT INTO customer set ?', data, (err, customer) => {
        console.log("*******");
        console.log(customer)
        res.json(customer);
      })
})};
controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
      res.send('se eliminó el id:'+id);
    });
  });
}
controller.search = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
      connection.query('SELECT * FROM customer WHERE id = ?', [id], (err, rows) => {
        res.send(rows);
      });
    });
  }
module.exports = controller;