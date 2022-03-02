<template lang="">
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <h5 class="text-center">Siswa CRUD</h5>
                <router-link
                    :to="{name: 'siswa.index'}"
                    class="btn btn-primary btn-sm rounded shadow mb-3"
                >Back</router-link>
                <div class="card rounded shadow">
                    <div class="card-header">
                        <h5>Tambah Siswa</h5>
                    </div>
                    <div class="card-body">
                        <form @Submit.prevent="store()">
                            <div class="mb-3">
                                <label for="" class="form-label">Nama</label>
                                <input type="text" class="form-control" v-model="siswa.nama">
                                <div v-if="validation.nama" class="text-danger">
                                    {{ validation.nama[0] }}
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">No Absen</label>
                                <input type="number" class="form-control" v-model="siswa.no_absen">
                                <div v-if="validation.no_absen" class="text-danger">
                                    {{ validation.no_absen[0] }}
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Kelas</label>
                                <input type="number" class="form-control" v-model="siswa.kelas">
                                <div v-if="validation.kelas" class="text-danger">
                                    {{ validation.kelas[0] }}
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Jurusan</label>
                                <select type="text" class="form-select" v-model="siswa.jurusan">
                                    <option value="TKJ">TKJ</option>
                                    <option value="AKL">AKL</option>
                                    <option value="BDP">BDP</option>
                                </select>
                                <div v-if="validation.jurusan" class="text-danger">
                                    {{ validation.jurusan[0] }}
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Deskripsi</label>
                                <textarea class="form-control" v-model="siswa.deskripsi"></textarea>
                                <div v-if="validation.deskripsi" class="text-danger">
                                    {{ validation.deskripsi[0] }}
                                </div>
                            </div>
                            <button class="btn btn-outline-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import DataService from '../../services/DataService';

export default {
    setup() {
        // data binding

        const siswa = reactive({
            nama : '',
            no_absen: '',
            kelas : '',
            jurusan: '',
            deskripsi: ''
        })

        const validation = ref([])

        const router = useRouter();

        function store() {
            axios.post(
                'http://siswa-app.test/api/siswa',
                siswa
            )
            .then(() => {
                router.push({
                    name : 'siswa.index'
                })
            }).catch((err) => {
                validation.value = err.response.data
            })
        }
        return {
            siswa,
            validation,
            router,
            store
        }
    }
}
</script>
<style lang="">
    
</style>