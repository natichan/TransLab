const assert = require('chai').assert;
global.window = global;
require('../src/js/main'); //Sólo enlaza el archivo, parecido al script de html

describe('iniciar sesión', () => {
    describe('validateEmail(email)', () => {
        it('Deberia ser una función para validar email', () => {
            assert.isFunction(validateEmail);
        });
        describe('debería validar que el email tenga arroba', () => {
            it('Debería el email tener un arroba', () => {
                assert.equal(validatePassword('aaa@aaa.com'), true);
                assert.equal(validatePassword('aaaa@@aaa.com'), false);
            });
            it('Debería el correo tener un arroba antes del dominio', ()=>{
                assert.equal(validateEmail(".com@asdf"), false);
                assert.equal(validateEmail("fabian@laboratoria.la"), true);
            });
        });
        describe('Debería verificar si tiene un dominio', () => {
                it('Tiene un punto y luego solo caracteres del alfabeto', () => {
                    assert.equal(validateEmail('asdf@asdf'), false);
                    assert.equal(validateEmail('asdf@asdf.'), false);
                });
        });
        describe('Debería verificar que ingrese strings', () => {
            it('No debería ingresar input vacio', () => {
                assert.equal(validatePassword('aaaaa@aaaa.com'), true);
                assert.equal(validatePassword(''), false);
                })
            })
    });
    describe('validatePassword(password)', () => {
        it('Deberia ser una función para validar password', () => {
            assert.isFunction(validatePassword);
        });
        describe('Deberia validar la contraseña', () => {
            it('Debería la contraseña ser de máximo 8 caracteres', () => {
                assert.equal(validatePassword('12345678'), true);
                assert.equal(validatePassword('123456789'), false);
            });
            it('Debería la contraseña ser sólo números', () => {
                assert.equal(validatePassword('12345678'), true);
                assert.equal(validatePassword('lechuga'), false);
                assert.equal(validatePassword('44lechu'), false);
            });
            it('No debería ingresar input vacío', () => {
                assert.equal(validatePassword('12345678'), true);
                assert.equal(validatePassword(''), false);
            });
        });
    });
});
