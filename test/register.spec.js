const assert = require('chai').assert;
global.window = global;
require('../src/js/register'); //Sólo enlaza el archivo, parecido al script de html

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

    describe('validatePassword(password)', () => {
        it('Deberia ser una función para validar password', () => {
            assert.isFunction(validatePassword);
        });
    });
        describe('Deberia validar la contraseña', () => {
            it('Debería la contraseña ser de máximo 8 caracteres', () => {
                assert.equal(validatePassword('12345678'), true);
                assert.equal(validatePassword('123456789'), false);
            });
            it('Debería la contraseña ser sólo números', () => {
                assert.isNumber(validatePassword('12345678'), true);
                assert.isNumber(validatePassword('lechuga'), false);
                assert.isNumber(validatePassword('44lechu'), false);
            });
            it('Debería verificar que no ingrese campos vacíos', () => {
                assert.equal(validatePassword('12345678'), true);
                assert.equal(validatePassword(''), false);
            });
        });   
});
