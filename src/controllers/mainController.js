const fs = require('fs');
const path = require('path');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controlador = {
    home: (req,res) => {
        res.render("home")
    }
}

module.exports = controlador;