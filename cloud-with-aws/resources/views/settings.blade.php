@extends('templatingLayout.main')

@section('container')
    <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Settings</title>
        </head>
        <body>
            <div>
                @include('settings-state')
                <button onclick="getData()">Active</button>
                <button onclick="postData()" class="Inactive">Inactive</button>
                <script>
                    async function getData() {
                        const response = await fetch('http://192.168.129.78:5000/api/data')
                        const get_data = await response.json()
                        console.log('Data from raspberry pi:', get_data)
                    }

                    async function postData() {
                        const post_data = {key: 'Inactive'}
                        const response = await fetch('http://192.168.129.78:5000/api/data', {
                            method : 'POST',
                            headers : {
                                'Content-Type' : 'application/json'
                            },
                            body: JSON.stringify(post_data),
                        })
                    }

                    const result = await response.json();
                    console.log('Result of post request:', result)
                </script>
            </div>
        </body>
    </html>
@endsection