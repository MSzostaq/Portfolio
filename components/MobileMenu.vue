<template>
  <div class="absolute inset-0 overflow-y-auto bg-black bg-opacity-50">
    <div class="flex items-start justify-center min-h-screen mt-24 text-center">
      <div
        class="w-64 p-6 text-center text-black bg-white rounded-lg shadow-xl"
        role="dialog"
        aria-modal="true"
      >
        <h3>Do you confirm?</h3>
        <div class="flex justify-center py-4 text-white">
          <button
            @click="$emit('close')"
            class="mr-4 text-black bg-white border border-black"
          >
            No
          </button>
          <button @click="$emit('close')">Yes</button>
        </div>
      </div>
    </div>
  </div>
</template>
