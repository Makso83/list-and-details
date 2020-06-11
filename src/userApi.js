import Axios from "axios";

const ERROR_MESSAGE =
    "Не удалось получить данные. Попробуйте позже. Сведения об ошибке: ";

const getUserInstance = Axios.create({
    baseURL: process.env.REACT_APP_USERS_URL,
});

// Функция принимает следующие аргументы:
// 1) url - дополнение к базовому URL;
// 2) stateSetter - функция, устанавливающая полученный результат GET-запроса в соответствующий стейт;
// 3) loadingFlagSetter - функция, устанавливающая флаг загрузки для показа "крутилки" вместо контента.

export default (url, stateSetter, loadingFlagSetter) => {
    loadingFlagSetter(true);
    getUserInstance
        .get(url)
        .then((response) => stateSetter(response.data))
        .catch((err) => alert(ERROR_MESSAGE + err))
        .finally(() => loadingFlagSetter(false));
};
