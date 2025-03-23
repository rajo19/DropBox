<template>
    <el-card>
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">List of Files</h2>
      <el-table :data="files">
        <el-table-column prop="filename" label="File Name" width="1000" />
        <el-table-column prop="size" label="Size" width="300">
          <template #default="{ row }">
            {{ formatFileSize(row.size) }}
          </template>
        </el-table-column>
        <el-table-column label="Actions" width="200">
          <template #default="{ row }">
            <el-button
              type="primary"
              size="small"
              @click="downloadFile(row._id)"
            >
              Download
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <p v-if="files.length === 0" class="text-gray-600 mt-4">
        No files uploaded yet.
      </p>
    </el-card>
  </template>
  
  <script>
  import { downloadFile } from "@/services/fileService";
  
  export default {
    name: "FileList",
    props: {
      files: {
        type: Array,
        required: true,
      },
    },
    methods: {
      downloadFile(fileId) {
        downloadFile(fileId);
      },
      formatFileSize(bytes) {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
      },
    },
  };
  </script>