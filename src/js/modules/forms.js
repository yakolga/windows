import checkNumInputs from "./checkNumInputs";

const forms = (state) => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');

    checkNumInputs('input[name="user_phone"]');
    
    const message = {
        loading: 'Loading...',
        success: 'Thanks! We will contact you as soon as possible',
        failure: 'Something went wrong...'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);

            if (item.getAttribute("data-calc") === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            console.log(item);

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => {
                    statusMessage.textContent = message.failure;
                })
                .finally(() => {
                    inputs.forEach(input => {
                        input.value = "";
                    });
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
        });
    })
}

export default forms;