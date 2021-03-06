const router = require("../routes/customer");

const controller = {};


controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM customer', (err, customers) => {
     if (err) {
      res.json(err);
     }
     res.render('customers', {
        data: customers
     });
    });
  });
};

controller.li = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM entrada', (err, login) => {
     if (err) {
      res.json(err);
     }
     res.render('login', {
        data: login
     });
    });
  });
};
controller.l = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM entrada', (err, registro) => {
     if (err) {
      res.json(err);
     }
     res.render('registro', {
        data: registro
     });
    });
  });
};
controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO customer set ?', data, (err, customer) => {
      console.log(customer)
      res.redirect('/tabla');
    })
  })
};

 controller.user = (req, res) => {
  const {correo} = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    
    const query = connection.query('SELECT * FROM entrada where correo= ?', [correo], (err, entrada) => {
      
      console.log(entrada)
      res.redirect('/tabla');
    })
  
  })
};


  

controller.registro = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO entrada set ?', data, (err, entrada) => {
      console.log(entrada)
      res.redirect('/');
    })
  })
};





controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM customer WHERE id = ?", [id], (err, rows) => {
      res.render('customers_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE customer set ? where id = ?', [newCustomer, id], (err, rows) => {
    res.redirect('/tabla');
  });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
      res.redirect('/tabla');
    });
  });
}





module.exports = controller;
