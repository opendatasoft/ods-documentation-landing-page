<template>
    <div class="ods-spinner--wrapper">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1"
        class="ods-spinner--svg">
            <rect x="0" y="0" width="30" height="30" class="ods-spinner__cell-11"></rect>
            <rect x="35" y="0" width="30" height="30" class="ods-spinner__cell-12"></rect>
            <rect x="70" y="0" width="30" height="30" class="ods-spinner__cell-13"></rect>
            <rect x="0" y="35" width="30" height="30" class="ods-spinner__cell-21"></rect>
            <rect x="35" y="35" width="30" height="30" class="ods-spinner__cell-22"></rect>
            <rect x="70" y="35" width="30" height="30" class="ods-spinner__cell-23"></rect>
            <rect x="0" y="70" width="30" height="30" class="ods-spinner__cell-31"></rect>
            <rect x="35" y="70" width="30" height="30" class="ods-spinner__cell-32"></rect>
            <rect x="70" y="70" width="30" height="30" class="ods-spinner__cell-33"></rect>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'spinner'
}
</script>

<style lang='less'>

// .ods-spinner--wrapper {
//     padding-top: 80px ;
//     width: 100%;
//     display: flex;
//     justify-content: center;
// }

// .ods-spinner--svg {
//   fill: black;
//   height: 2.5em;
// }

// @keyframes ods-spinner__diagonal-11-33-animation {
//   0% { opacity: 1; }
//   31.25% { opacity: 1; }
//   37.5% { opacity: 0.5; }
//   43.75% { opacity: 0.5; }
//   50% { opacity: 0; }
//   62.5% { opacity: 0; }
//   68.75% { opacity: 1; }
//   100% { opacity: 1; }
// }
// @keyframes ods-spinner__diagonal-12-23-animation {
//   0% { opacity: 1; }
//   37.5% { opacity: 1; }
//   43.75% { opacity: 0.5; }
//   50% { opacity: 0.5; }
//   56.25% { opacity: 0; }
//   68.75% { opacity: 0; }
//   75% { opacity: 1; }
//   100% { opacity: 1; }
// }
// @keyframes ods-spinner__diagonal-21-32-animation {
//   0% { opacity: 1; }
//   6.25% { opacity: 0.5; }
//   12.5% { opacity: 1; }
//   18.75% { opacity: 0.5; }
//   25% { opacity: 1; }
//   31.25% { opacity: 0.5; }
//   37.5% { opacity: 0.5; }
//   43.75% { opacity: 0; }
//   56.25% { opacity: 0; }
//   62.5% { opacity: 1; }
//   100% { opacity: 1; }
// }
// @keyframes ods-spinner__diagonal-31-animation {
//   0% { opacity: 1; }
//   6.25% { opacity: 0.5; }
//   12.5% { opacity: 1; }
//   18.75% { opacity: 0.5; }
//   25% { opacity: 1; }
//   31.25% { opacity: 0.5; }
//   37.5% { opacity: 0; }
//   50% { opacity: 0; }
//   56.25% { opacity: 1; }
//   81.25% { opacity: 1; }
//   87.5% { opacity: 0.5; }
//   93.75% { opacity: 0.5; }
//   100% { opacity: 1; }
// }
// @keyframes ods-spinner__diagonal-13-animation {
//   0% { opacity: 1; }
//   43.75% { opacity: 1; }
//   50% { opacity: 0.5; }
//   56.25% { opacity: 0.5; }
//   62.5% { opacity: 0; }
//   75% { opacity: 0; }
//   81.25% { opacity: 1; }
//   100% { opacity: 1; }
// }

// .ods-spinner__cell-11,
// .ods-spinner__cell-22,
// .ods-spinner__cell-33 {
//   animation: 2s ods-spinner__diagonal-11-33-animation infinite;
// }
// .ods-spinner__cell-12,
// .ods-spinner__cell-23 {
//   animation: 2s ods-spinner__diagonal-12-23-animation infinite;
// }
// .ods-spinner__cell-21,
// .ods-spinner__cell-32 {
//   animation: 2s ods-spinner__diagonal-21-32-animation infinite;
// }
// .ods-spinner__cell-13 {
//   animation: 2s ods-spinner__diagonal-13-animation infinite;
// }
// .ods-spinner__cell-31 {
//   animation: 2s ods-spinner__diagonal-31-animation infinite;
// }
</style>