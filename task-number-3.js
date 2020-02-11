      let message = '';
      const ADMIN_PASSWORD = '123';
      let input = prompt ('Пароль?')
      if (input==null){
          message='Отменено пользователем!'
      }
      else if(input==ADMIN_PASSWORD){
          message='Добро пожаловать!'
      }
      else{
          message='Доступ запрещен, неверный пароль!'
      }
      alert(message)
    