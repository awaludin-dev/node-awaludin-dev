const Jadwal = require('./model');

const getJadwal = async (req, res) => {
    try {
        const jadwal = await Jadwal.findAll({
            attributes: ['week', 'jadwal']
        });
        res.json({
            status: 'Successfull',
            data: jadwal
        });
    } catch(error) {
        console.log(error);
    }
}

const getJadwalByWeek = async (req, res) => {
    try {
        const jadwal = await Jadwal.findAll({
            attributes: ['week', 'jadwal'],
            where: {
                week: req.params.week
            }
        });
        res.send(jadwal);
    } catch(error) {
        console.log(error);
    }
}

const createJadwal = async (req, res) => {
    const {week, jadwal} = req.body
    try{
        await Jadwal.create({week, jadwal});
        res.json({
            'message': 'Jadwal Created!'
        })
    } catch(error) {
        console.log(error)
    }
}

const updateJadwal = async (req, res) => {
    try {
        await Jadwal.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Jadwal Updated!"
        });
    } catch(error) {
        console.log(error);
    }
}

const deleteJadwal = async (req, res) => {
    try {
        await Jadwal.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({
            "message": "Jadwal Deleted!"
        })
    } catch(error) {
        console.log(error);
    }
}

module.exports = {
    getJadwal,
    getJadwalByWeek,
    createJadwal,
    updateJadwal,
    deleteJadwal
}