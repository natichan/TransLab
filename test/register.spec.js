const assert = require('chai').assert;
global.window = global;
require('../src/js/register'); 

describe('iniciar sesión validación', () => {
    describe('validateEmail(email)', () => {
        it('Deberia ser una función para validar email', () => {
            assert.isFunction(validateEmail);
        });
    });
        describe('debería validar que el email tenga un formato válido', () => {
            it('Debería el email tener un arroba', () => {
                assert.equal(validateEmail('aaa@aaa.com'), true);
                assert.equal(validateEmail('aaaa@@aaa.com'), false);
            });
            it('Debería el correo tener un arroba antes del dominio', ()=>{
                assert.equal(validateEmail(".com@asdf"), false);
                assert.equal(validateEmail("fabian@laboratoria.la"), true);
            });
        });
        describe('Debería verificar que no ingrese campos vacíos', () => {
            it('verificar que no deje el campo vacío', () => {
                assert.equal(validateEmail('aaaaa@aaaa.com'), true);
                assert.equal(validateEmail(''), false);
                });
            });    
});
    