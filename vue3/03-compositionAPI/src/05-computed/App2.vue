<template>
  <h2>{{ fullname }}</h2>
  <button @click="setFullname">设置fullname</button>
</template>

<script>
import { reactive, computed, ref } from 'vue'

  export default {
    setup() {
      const names = reactive({
        firstName: "kobe",
        lastName: "bryant"
      })

      const fullname = computed({
        set: function(newValue) {
          const tempNames = newValue.split(" ")
          names.firstName = tempNames[0]
          names.lastName = tempNames[1]
        },
        get: function() {
          return names.firstName + " " + names.lastName
        }
      })


      function setFullname() {
        fullname.value = "love zero"
        console.log(names)
      }

      return {
        names,
        fullname,
        setFullname,
      }
    }
  }
</script>
