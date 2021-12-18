const routerSeq = require('express').Router();
const { getJadwal, getJadwalByWeek, createJadwal, updateJadwal, deleteJadwal } = require('./controller');
const Jadwal = require('./model');

routerSeq.get('/jadwal', getJadwal);

routerSeq.get('/jadwal/:week', getJadwalByWeek);

routerSeq.post('/jadwal', createJadwal)

routerSeq.put('/jadwal/:week', updateJadwal)

routerSeq.delete('/jadwal/:week', deleteJadwal);

module.exports = routerSeq;