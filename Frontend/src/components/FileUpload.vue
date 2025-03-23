<template>
    <el-card class="mb-8">
      <div style="display: flex; align-items: center; gap: 16px;">
        <el-upload
          :on-change="handleFileUpload"
          :auto-upload="false"
          :show-file-list="false"
        >
          <el-button type="primary">Choose File</el-button>
        </el-upload>
        <el-button
          type="success"
          @click="uploadFile"
          :disabled="!selectedFile"
        >
          Upload
        </el-button>
      </div>
      <p v-if="selectedFile" class="mt-4 text-gray-700">
        Selected file: <span class="font-semibold">{{ selectedFile.name }}</span>
      </p>
    </el-card>
  </template>
  
  <script>
  import { uploadFile } from "@/services/fileService";
  
  export default {
    name: "FileUpload",
    data() {
      return {
        selectedFile: null,
      };
    },
    methods: {
      handleFileUpload(file) {
        this.selectedFile = file.raw;
      },
      async uploadFile() {
        if (!this.selectedFile) return;
  
        try {
          await uploadFile(this.selectedFile);
          this.$emit("file-uploaded"); 
          this.selectedFile = null; 
        } catch (error) {
          console.error("Failed to upload file", error);
        }
      },
    },
  };
  </script>