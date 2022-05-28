const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const md5 = require("md5")
const db = require("../db")
const SECRET_KEY = "admin"
const secret = '#$@^%$^%*&%$$@&'

function hashPassword(password) {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
}

module.exports = {
    registrasi: (req, res) => {
        const {
            nama,
            username,
            password
        } = req.body
        if (!nama, !username || !password) {
            res.status(402).json({
                message: "nama, email dan password harus diisi!"
            })
        }
        return db.query('insert into admin set ?', {
            nama,
            username,
            password: md5(password)
        }, (err) => {
            if (err) {
                return res.status(500).json({
                    err
                })
            }
            return res.json({
                message: 'registrasi berhasil',
                data : ({
                    nama,
                    username,
                    password:md5(password)
                })
            })
        })
    },

    // login
    login: (req, res) => {
        let username = req.body.username;
        let password = req.body.password;

        if (!username || !password)
            res.status(402).json({ message: "Username dan password harus diisi." });

        db.query(
            `select * from admin where username = '${username}'`,
            (err, result) => {
                const customer = result[0];
                if (typeof customer === "undefined") {
                    res.status(401).json({ message: "User not fond" });
                } else {
                    if (customer.password === md5(password)) {
                        const token = jwt.sign({ data: customer }, SECRET_KEY);
                        res.json({
                            logged: true,
                            data: customer,
                            token: token,
                        });
                    } else {
                        res.json({
                            message: "Invalid password",
                        });
                    }
                }
            }
        );
    },
    getAll: (req, res) => {
        db.query(`select * from admin`, (err, results) => {
            if (err) throw (err)
            res.json({
                message: "Berhasil Menampilkan Semua Data",
                result : results
            })
        })
    },

    getId: (req, res) => {
        const id = req.params.id
        db.query(`select * from admin where id = '${id}'`, (err, results) => {
            if (null, err) throw err
            res.json({
                message: "Data admin",
                result: results
            })
        })
    }
}