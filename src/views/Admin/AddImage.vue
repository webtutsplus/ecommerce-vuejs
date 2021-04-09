<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Add a new Image</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-3"></div>
      <div class="col-md-6 px-5 px-md-0 pt-5">
        <div class="form-group">
          <label for="myfile">Select image :</label>
          <input type="file" id="myfile" class="form-control-file" @change="onFileSelected">
        </div>
        <button type="button" class="btn btn-info" @click="onUpload">Upload</button>
      </div>
      <div class="col-3"></div>
    </div>
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
            if(this.selectedFile.type !== "image/jpeg" && this.selectedFile.type !== "image/png" &&
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

<style scoped>
h4 {
  font-family: 'Roboto', sans-serif;
  color: #484848;
  font-weight: 700;
}

</style>
