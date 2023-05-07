<script setup>
	const getSysInfo = () => {
		console.log('getSysInfo()')

		// fetch("", {})
		// 		.then(res => {})
		// 		.catch(err => {
		// 			console.log('getSysInfo() error ', err.message)
		// 		})
	}

	const selectToInstall = () => {
		console.log('selectToInstall()')
	}

	const checkForUpdate = () => {
		console.log('checkForUpdate()')
	}

	const selectToUninstall = () => {
		console.log('selectToUninstall()')
	}
</script>

<template>
  <div id="dashboard" class="m-5 p-3 min-h-full h-96 rounded-xl flex">
	  <div class="control bg-indigo-500 hover:bg-indigo-800" @click="getSysInfo">SysInfo</div>
	  <div class="control bg-green-600 hover:bg-green-800" @click="selectToInstall">Install</div>
		<div class="control bg-yellow-400 hover:bg-yellow-600" @click="checkForUpdate">Upgrade</div>
	  <div class="control bg-red-500 hover:bg-red-900" @click="selectToUninstall">Uninstall</div>
  </div>
</template>

<style scoped>
#dashboard {
  background-color: white;
}

.control {
	@apply w-96 m-3 flex justify-center items-center rounded-xl text-white text-xl font-medium
}
</style>