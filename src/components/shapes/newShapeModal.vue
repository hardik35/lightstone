<template>
    <div 
        class="modal"
        v-if="isNewShapeModalVisible">
        <div class="modal-main">
            <h3> Add shape </h3>
            <div v-for="(shapeConfigurationDetails, shapeConfiguration, index) in newShapeForm"
                :key="index"
                style="margin: 10px 0">
                <input
                    :placeholder="newShapeForm[shapeConfiguration].placeholder" 
                    v-model="newShapeForm[shapeConfiguration].value"
                    :type="newShapeForm[shapeConfiguration].type"/>
            </div>
            <div>
                <button 
                    class="button-danger"
                    @click.stop="onShapeModalClose">
                    Close
                </button>
                <button 
                    class="button-confirm"
                    @click.stop="onShapeAddition">
                    Add
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isNewShapeModalVisible: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            newShapeForm: {
                top: {
                    placeholder: 'Top',
                    value: null,
                    type: 'number',
                },
                left: {
                    placeholder: 'Left',
                    value: null,
                    type: 'number',
                },
                width: {
                    placeholder: 'Width',
                    value: null,
                    type: 'number',
                },
                height: {
                    placeholder: 'Height',
                    value: null,
                    type: 'number',
                },
                name: {
                    placeholder: 'Name',
                    value: null,
                    type: 'text',
                }
            }
        }
    },
    methods: {
        onShapeAddition() {
            const shapeData = {};
            const shapeConfigurationKeys = Object.keys(this.newShapeForm);
            for (let i = 0; i < shapeConfigurationKeys.length; i += 1) {
                shapeData[shapeConfigurationKeys[i]] = this.newShapeForm[shapeConfigurationKeys[i]].value;
            }
            this.$emit('onShapeAddition', shapeData);
            this.onShapeModalClose();
        },
        onShapeModalClose() {
            this.$emit('update:isNewShapeModalVisible', false);
            this.resetShapeFormValues();
        },
        resetShapeFormValues() {
            const shapeConfigurationKeys = Object.keys(this.newShapeForm);
            for (let i = 0; i < shapeConfigurationKeys.length; i += 1) {
                this.newShapeForm[shapeConfigurationKeys[i]].value = null;
            }
        }
    }
}
</script>

<style scoped>
    input {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
    .modal {
        position: fixed;
        z-index: 5 !important;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
    }
    .modal-main {
        position: fixed;
        border-radius: 10px;
        padding: 30px;
        background: white;
        width: auto;
        height: auto;
        min-width: 250px;
        min-height: 250px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }
    button {
        border: none;
        color: white;
        border-radius: 10px;
        padding: 10px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        cursor: pointer;
        margin: 0 5px;
    }
    .button-danger {
        background-color: red;
    }
    .button-confirm {
        background-color: green;
    }
</style>