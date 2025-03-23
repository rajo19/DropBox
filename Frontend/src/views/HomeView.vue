<template>
    <div class="min-h-screen bg-gray-100 py-8">
      <div class="max-w-4xl mx-auto px-4">
        <Header />
  
        <FileUpload @file-uploaded="fetchFiles" />
  
        <FileList :files="files" />
      </div>
    </div>
  </template>
  
  <script>
  import { fetchFiles } from "@/services/fileService";
  import Header from "@/components/Header.vue";
  import FileUpload from "@/components/FileUpload.vue";
  import FileList from "@/components/FileList.vue";
  
  export default {
    name: "HomeView",
    components: {
      Header,
      FileUpload,
      FileList,
    },
    data() {
      return {
        files: [],
      };
    },
    async created() {
      await this.fetchFiles();
    },
    methods: {
      async fetchFiles() {
        try {
          this.files = await fetchFiles();
        } catch (error) {
          console.error("Failed to fetch files", error);
        }
      },
    },
  };
  </script>