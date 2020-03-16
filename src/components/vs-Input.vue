<template>
    <validation-provider :name="name"
                         :rules="rules"
                         v-slot="{ errors, validated }"
                         tag="div"
                         class="id-input__container">
        <div class="id-input" @click="selected">
            <label :for="name" class="id-input__placeholder" :class="{'--active': isActive || text.length}">{{ placeholder }}</label>
            <input @focus="isActive = true"
                   @blur="lostFocus()"
                   @keyup="text = $event.target.value; $emit('input', text)"
                   :type="type"
                   :name="name"
                   :id="name"
                   :readonly="readonly"
                   v-model="text"
                   v-maska="mask"
                   autocomplete='off'
                   :disabled="type == 'select'"
                   class="id-input__input"/>
        </div>
        <span class="vs-input__span" :class="{'--on-error': errors.length}">
            {{ errors[0] }}
        </span>
    </validation-provider>
</template>

<script>
import { ValidationProvider } from "vee-validate";
import { maska } from 'maska';
export default {
    props: {
        placeholder: {
            type: String,
            default: 'input'
        },
        value: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: "text"
        },
        name: {
            type: String,
            required: true
        },
        readonly: {
            type: Boolean,
            default: false
        },
        rules: {
            type: String
        },
        mask: {
            type: String,
            default: ''
        }
    },
    components:{
        ValidationProvider
    },
    data(){
        return {
            isActive: false,
            text: this.value
        };
    },
    watch: {
        value(newValue){
            if(newValue != this.text){
                this.text = newValue;
            }
        }
    },
    methods: {
        selected(e){
            if(this.type == 'select') {
                e.preventDefault();
                this.$emit('select');
            }
        },
        lostFocus(){
            if(this.mask.length) {
                if(this.text.length != this.mask.length) {
                    this.$emit('input', '');
                }
            }
            this.isActive = this.text.length;

        }
    },
    directives: {
        maska
    }
};
</script>

<style>
.id-input__container{
    width: 100%;
}
.id-input{
    position: relative;
    height: 40px;
    width: 100%;
    display: flex;
    align-items: flex-end;
    padding-bottom: 5px;
    margin-top: 20px;
    border-bottom: solid #BEBEBE 1px;
}
.id-input__input{
    width: 100%;
    border: none;
    outline: none;
    font-size: 14px;
    font-weight: var(--semi-bold);
    background-color: transparent;
    color: white;
}
.id-input__input:read-only{
    color: white;
}
.id-input__placeholder{
    color: white;
    position: absolute;
    bottom: 8px;
    font-size: 14px;
    transition: .3s;
    font-weight: var(--semi-bold);
}

.--active{
    bottom: 30px;
    font-size: 10px;
    color: var(--accent-color);
}
.vs-input__span{
    display: block;
    font-size: 11px;
    height: 0px;
    transition: .3s;
    overflow: hidden;
    font-weight: var(--light)
}
.--on-error{
    color: white;
    height: 16px;
    display: flex;
    align-items: flex-end
}
</style>