<script setup>
import sysIcon from '/src/assets/icon/sys.png'
import installIcon from '/src/assets/icon/ins.png'
import updateIcon from '/src/assets/icon/upd.png'
import uninstallIcon from '/src/assets/icon/unins.png'
import router from "../../router/index.js";

	const getSysInfo = () => {
		console.log('getSysInfo()')

		router.push('/sysInfo')

		// fetch("", {})
		// 		.then(res => {})
		// 		.catch(err => {
		// 			console.log('getSysInfo() error ', err.message)
		// 		})
	}

	const selectToInstall = () => {
		console.log('selectToInstall()')
		const installInput = document.createElement('input')
		installInput.type = 'file'
	}

	const checkForUpdate = () => {
		console.log('checkForUpdate()')
	}

	const selectToUninstall = () => {
		console.log('selectToUninstall()')
	}
</script>

<template>
  <div id="dashboard" class="flex h-96">
	  <div class="control bg-indigo-100">
			<div class="control-item border-indigo-500 border-dashed border-b-2">
				<img :src="sysIcon" class="w-9"  alt="sysIcon"/>
			</div>
			<div class="control-item text-gray-600">
				<i>Show system info</i>
			</div>
			<div class="control-item rounded-b-xl bg-indigo-500 hover:bg-indigo-700" @click="getSysInfo">SysInfo</div>
		</div>
		<div class="control bg-emerald-100">
			<div class="control-item border-emerald-700 border-dashed border-b-2">
				<img :src="installIcon" class="w-9" alt="installIcon">
			</div>
			<div class="control-item text-gray-600">
				<i>Select package to install</i>
			</div>
			<div class="control-item rounded-b-xl bg-emerald-500 hover:bg-emerald-700" @click="selectToInstall">Install</div>
		</div>
		<div class="control bg-yellow-100">
			<div class="control-item border-yellow-500 border-dashed border-b-2">
				<img :src="updateIcon" class="w-9" alt="updateIcon">
			</div>
			<div class="control-item text-gray-600">
				<i>Check for update</i>
			</div>
			<div class="control-item rounded-b-xl bg-yellow-400 hover:bg-yellow-600" @click="checkForUpdate">Update</div>
		</div>
		<div class="control bg-red-100">
			<div class="control-item border-red-700 border-dashed border-b-2">
				<img :src="uninstallIcon" class="w-9" alt="uninstallIcon">
			</div>
			<div class="control-item text-gray-600">
				<i>Uninstall package</i>
			</div>
			<div class="control-item rounded-b-xl bg-red-500 hover:bg-red-700" @click="selectToUninstall">Uninstall</div>
		</div>
  </div>
</template>

<style scoped>
#dashboard {}

.control {
	@apply w-96 m-3 flex flex-col rounded-xl text-white text-xl font-medium
}

.control-item {
	@apply flex-1 flex justify-center items-center
}
</style>