<template lang="">
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <h5 class="text-center">Siswa CRUD</h5>
                <router-link
                    :to="{name: 'siswa.create'}"
                    class="btn btn-primary btn-sm rounded shadow mb-3"
                >Add</router-link>
                <div class="card rounded shadow">
                    <div class="card-header">
                        <h5>Siswa List</h5>
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>No Absen</th>
                                    <th>Nama</th>
                                    <th>Kelas</th>
                                    <th>Jurusan</th>
                                    <th>Deskripsi</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(siswa, index) in siswas.data" :key="index">
                                    <td>{{ siswa.no_absen }}</td>
                                    <td>{{ siswa.nama }}</td>
                                    <td>{{ siswa.kelas }}</td>
                                    <td>{{ siswa.jurusan }}</td>
                                    <td>{{ siswa.deskripsi }}</td>
                                    <td>
                                        <div class="btn-group">
                                            <router-link
                                                :to="{name : 'siswa.edit', params: {id: siswa.id}}"
                                                class="btn btn-sm btn-outline-info"
                                            >Edit</router-link>
                                            <button class="btn btn-sm btn-outline-danger" 
                                                @click.prevent="destroy(siswa.id, index)"
                                            >Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import DataService from '../../services/DataService';

export default {
    setup() {
        let siswas = ref([]);

        onMounted(() => {
            axios.get('http://siswa-app.test/api/siswa')
            // DataService.getAll()
            .then(response => {
                siswas.value = response.data
            })
        })

        function destroy(id, index){
            axios.delete(`http://siswa-app.test/api/siswa/${id}`)
            .then(() => {
                siswas.value.data.splice(index, 1);
            })
            .catch((err) => {
                console.log(err.response.data)
            })
        }

        return {
            siswas,
            destroy
        }
    }
}
</script>
<style lang="">
    
</style>