const strings = {
  az: {
    language: 'Azərbaycan dili',
    week_days: ['Bazar', 'Bazar ertəsi', 'Çərşənbə axşamı', 'Çərşənbə', 'Cümə axşamı', 'Cümə', 'Şənbə'],
    months: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'İyun', 'İyul', 'Avqust', 'Sentrabr', 'Oktyabr', 'Noyabr', 'Dekabr'],
    home: 'Gündəlik siyahı',
    weekdayslist: 'Həftənin günləri',
    add_todo: 'Yeni iş əlavə et',
    add_expense: 'Gəlir/xərc əlavə et',
    category: 'Kateqoriya',
    categories: 'Kateqoriyalar',
    all_categories: 'Bütün kateqoriyalar',
    choose_category: 'Kateqoriya seçin',
    settings: 'Sazlamalar',
    language_selection: 'Dil seçimi',
    about: 'Müəllif haqqında',
    todos: 'Görülməli işlər',
    notodo_this_day: 'Bu gün üçün görülməli iş əlavə edilməyib',
    confirm_deleting: 'Silinmə əməliyyatını təsdiq edin',
    delete_are_you_sure: 'Silmək istədiyinizə əminsiniz?',
    yes: 'Bəli',
    no: 'Xeyr',
    choose_filter: 'Filtr seçin',
    apply_filter: 'Tətbiq et',
    show_all: 'Hamısını göstər',
    show_completed: 'Yerinə yetirilmişlər',
    show_active: 'Yerinə yetirilməyənlər',
    show_more: 'Daha çox göstər',
    list: 'Siyahı',
    empty_result: 'Filtr üzrə heçnə tapılmadı',
    title: 'Başlıq',
    date: 'Tarix',
    from_date: 'İlk tarix',
    to_date: 'Son tarix',
    day_of_week: 'Gün',
    choose_day_of_week: 'Seçmək istədiyiniz günlərin üzərinə klik edin',
    type: 'Növ',
    earning: 'Gəlir',
    expense: 'Xərc',
    amount: 'Məbləğ',
    manat: 'man.',
    penny: 'qəp.',
    add: 'Əlavə et',
    todo_added: 'Görüləcək iş müvəffəqiyyətlə əlavə olundu!',
    todo_edited: 'Görüləcək iş müvəffəqiyyətlə redaktə olundu!',
    todo_added_error: 'Görüləcək işin əlavə olunması/redaktə edilməsi üçün bütün xanalar doldurulmalıdır',
    expense_added: 'Gəlir/xərc müvəffəqiyyətlə əlavə olundu!',
    summary: 'cəmi',
    balance: 'Balans',
    set_password: 'Şifrə təyin et',
    unset_password: 'Şifrənin sil',
    change_password: 'Şifrəni dəyişmək',
    new_password: 'Yeni şifrə',
    your_password: 'Şifrəniz',
    repeat_password: 'Şifrənin təkrarı',
    password_added_success: 'Şifrə uğurla təyin olundu!',
    password_unset_success: 'Şifrə uğurla silindi!',
    password_added_fail: 'Xəta! Şifrə çox qısadır və yaxud şifrələr uyğun gəlmir.',
    invalid_password: 'Şifrə düzgün daxil edilməyib!',
    valid_password: 'Şifrə düzgün daxil edilib!',
    login_blocked: 'Giriş etmək üçün şifrənizi daxil edin.',
    login: 'Daxil ol',
    additional: 'Əlavə'
  },
  en: {
    language: 'English',
    week_days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    home: 'Daily list',
    weekdayslist: 'Week days',
    add_todo: 'Add new todo',
    todo_added_error: 'All fields should be filled to add/edit todo',
    add_expense: 'Add new earning/expense',
    category: 'Category',
    categories: 'Categories',
    all_categories: 'All',
    choose_category: 'Choose category',
    settings: 'Settings',
    about: 'About author',
    language_selection: 'Language selection',
    todos: 'Works to do',
    notodo_this_day: 'Nothing is added for this day',
    confirm_deleting: 'Delete confirmation',
    delete_are_you_sure: 'Are you sure you want to delete this record?',
    yes: 'Yes',
    no: 'No',
    choose_filter: 'Choose filter',
    apply_filter: 'Apply filter',
    show_all: 'Show all',
    show_completed: 'Show completed',
    show_active: 'Show active',
    show_more: 'Show more',
    list: 'List',
    empty_result: 'Nothing was found',
    title: 'Title',
    date: 'Date',
    from_date: 'From date',
    to_date: 'To date',
    day_of_week: 'Day',
    choose_day_of_week: 'Tap on week days you want to choose',
    type: 'Type',
    earning: 'Income',
    expense: 'Expense',
    amount: 'Amount',
    manat: 'man.',
    penny: 'gap.',
    add: 'Add record',
    todo_added: 'Todo was added successfully',
    todo_edited: 'Todo was edited successfully',
    expense_added: 'Earning/expense was added successfully',
    summary: 'total',
    balace: 'Balance',
    set_password: 'Set password',
    unset_password: 'Unset password',
    change_password: 'Change password',
    new_password: 'New password',
    your_password: 'Your password',
    repeat_password: 'Repeat password',
    invalid_password: 'Incorrect password!',
    valid_password: 'Correct password!',
    password_added_success: 'Password was set successfully!',
    password_unset_success: 'Password was unset successfully!',
    password_added_fail: 'Error! Either password is too short or passwords are not same.',
    login_blocked: 'Enter password in order to countinue.',
    login: 'Login',
    additional: 'More'
  },
  ru: {
    language: 'Русский язык',
    week_days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    months: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
    home: 'Ежедневный список',
    weekdayslist: 'Дни недели',
    add_todo: 'Добавление задачи',
    add_expense: 'Добавление дохода/расхода',
    category: 'Категория',
    categories: 'Категории',
    all_categories: 'Bce',
    choose_category: 'Выберите категорию',
    settings: 'Настройки',
    about: 'Об авторе',
    language_selection: 'Выбор языка',
    todos: 'Задачи',
    notodo_this_day: 'На этот день ничего',
    confirm_deleting: 'Подтверждение удаления',
    delete_are_you_sure: 'Вы уверены, что хотите удалить эту запись?',
    yes: 'Да',
    no: 'Нет',
    choose_filter: 'Выберите фильтр',
    apply_filter: 'Применить',
    show_all: 'Показать все',
    show_completed: 'Выполненные',
    show_active: 'Невыполненные',
    show_more: 'Показать ещё',
    list: 'Список',
    empty_result: 'По фильтру ничего не найдено',
    title: 'Заголовок',
    date: 'Дата',
    from_date: 'Дата с',
    to_date: 'Дата по',
    day_of_week: 'День',
    choose_day_of_week: 'Кликайте на дни которые хотите выбрать',
    type: 'Тип',
    earning: 'Доход',
    expense: 'Расход',
    amount: 'Amount',
    manat: 'ман.',
    penny: 'коп.',
    add: 'Добавить запись',
    todo_added: 'Задача успешно добавлена',
    todo_edited: 'Задача успешно отредактирована',
    todo_added_error: 'Не все поля заполнены',
    expense_added: 'Доход/расход успешно добавлен',
    summary: 'всего',
    balance: 'Баланс',
    set_password: 'Установить пароль',
    unset_password: 'Удалить пароль',
    change_password: 'Изменить пароль',
    new_password: 'Новый пароль',
    repeat_password: 'Подтверждение пароля',
    your_password: 'Ваш пароль',
    invalid_password: 'Неверный пароль!',
    valid_password: 'Верный пароль!',
    password_added_success: 'Пароль успешно установлен!',
    password_unset_success: 'Пароль успешно удален!',
    password_added_fail: 'Ошибка! Пароль либо очень короткий либо пароли не совпадают.',
    login_blocked: 'Вход заблокирован. Введите пароль, чтобы продолжить',
    login: 'Войти',
    additional: 'Дополнительно'
  }
}

export default strings;
