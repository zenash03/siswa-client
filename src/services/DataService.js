import httpCommon from '../http-common';

class DataService {
    getAll(){
        return httpCommon.get("/transaction");
    }
    get(id){
        return httpCommon.get(`/transaction/${id}`)
    }
    create(data) {
        return httpCommon.post('/transaction', data)
    }
    update(id, data) {
        return httpCommon.put(`/transaction/${id}`, data)
    }
    delete(id) {
        return httpCommon.delete(`/trasaction/${id}`)
    }
}

export default new DataService()