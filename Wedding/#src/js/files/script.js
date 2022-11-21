"use strict"
//Проверка что документ загружен
document.addEventListener('DOMContentLoaded', function () {
	//Далее создаем переменную куда запишем данные из формы
	const form = document.getElementById('form');
	//Вешаем событие на эту переменную (при отправке форму перейти в функцию formSend)
	form.addEventListener('submit', formSend);
	//Создаем функцию FormSend
	async function formSend(e) {
		e.preventDefault();
		//К переменной error присваиваем результат работы функии formValidate
		let error = formValidate(form);
		//Получаем данные формы
		let formData = new FormData(form);
		//Добавляем в FormData переменную
		//formData.append('image', formImage.files[0]);

		//Отправка формы с помощью AJAX , а именно fetch
		if (error === 0) {
			form.classList.add('_sending');
			//объявляем переменную response и в нее записываем данные из formData
			let response = await fetch('sendmail.php', {
				method: 'POST',
				body: formData
			});
			//Получение ответа успешна отправка или нет
			//файл sendmail.php нам вернет некий json ответ
			if (response.ok) {
				let result = await response.json();
				alert(result.message);
				//далее происходит очистка формы если она отправлена
				//Запись "formPreview.innerHTML" должна быть закомментирована иначе loading.gif не исчезнет после отправки
				//formPreview.innerHTML = '';
				form.reset();
				form.classList.remove('_sending');
			} else {
				alert("Ошибка");
				form.classList.remove('_sending');
			}
		} else {
			alert('Заполните обязательные поля');
		}
	}

	//Функция formValidate
	function formValidate(form) {
		//Передаем error изначально равный 0
		let error = 0;
		//Передаем в переменную все объекты с классом ._req (обязательные поля)
		let formReq = document.querySelectorAll('._req');
		//Создаем цикл проверки заполнения бязательных полей
		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
				//Проверка наличия чекбокса
			} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
				formAddError(input);
				error++;
				//Проверка заполненности остальных полей
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
	//Функция добавления объекту и родительскому объекту класс error
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	//Функция убирает объекту и родительскому объекту класс error
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	//Функция проверки поля email
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}

	//Получаем инпут file в переменную
	//const formImage = document.getElementById('formImage');
	//Получаем див для превью в переменную
	const formPreview = document.getElementById('formPreview');

});