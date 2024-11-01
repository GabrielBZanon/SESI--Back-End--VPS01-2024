const con = require('../CONNECT/banco').con;

const create = (req, res) => {
    let telefone_id = req.body.telefone_id;
    let cliente_id = req.body.cliente_id;
    let numero = req.body.numero;
    let tipo = req.body.tipo;

    let query = `INSERT INTO telefone (telefone_id, cliente_id, numero, tipo) VALUES`
    query += `('${telefone_id}', '${cliente_id}', '${numero}', '${tipo}');`;
    con.query(query, (err, result) => {
    if (err) {
        res.status(500).json(err)
    } else {
        res.status(201).json(result)
    }
})
}

const read = (req, res) => {
    con.query('SELECT * FROM telefone', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.json(result)
        }
    })
}

module.exports = {
    create,
    read
}