<template>
    <div class="image-upload container"> 
        <h2>Add a new Image</h2>
        <label for="myfile"><h3>Select image :</h3></label>
        <input type="file" id="myfile" @change="onFileSelected">
        <br>
        <button type="button" class="btn btn-info" @click="onUpload">Upload</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            selectedFile : null
        }
    },
    props : ["baseURL"],
    methods : {
        onFileSelected(event){
            //this will always update the selected file whenever user changes files
            this.selectedFile = event.target.files[0];
        },
        async onUpload(){
            if(!this.selectedFile) {
                swal({
                    text: "Select a file first",
                    icon: "warning",
                    closeOnClickOutside: false,
                });
                return;
            }
            console.log('====================='+this.selectedFile.type)
            if(this.selectedFile.type !== "image/jpeg" || this.selectedFile.type !== "image/png" ||
               this.selectedFile.type !== "image/jpg") {
                //file format is not correct
                swal({
                    text: "Select a image/jpeg file!",
                    icon: "error",
                    closeOnClickOutside: false,
                });
                return;
            }
            const formData = new FormData();
            formData.append('file', this.selectedFile);

            await axios({
                method: 'post',
                url: this.baseURL + "fileUpload/",
                data : formData,
            })
            .then(res => {
                this.$router.push({name : "Gallery"});
                swal({
                    text: "Image Added Successfully!",
                    icon: "success",
                    closeOnClickOutside: false,
                });
            })
            .catch(err => console.log(err))
        }
    },
    mounted() {
        if (!localStorage.getItem('token')) {
            this.$router.push({name : 'Signin'});
        }
    }
}
</script>

<style>
.image-upload h2{
  font-family: 'Courgette', cursive;
  font-size : 60px;
  text-align : center;
  margin : 70px 0 90px 0;
}
.image-upload,
.image-upload input{
    margin-left : 20px;
}
</style>