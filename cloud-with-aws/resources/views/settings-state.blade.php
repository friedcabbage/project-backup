<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $api_url = 'http://192.168.129.78:5000/api/data';

        //GET Request
        $get_data = json_decode(file_get_contents($api_url), true);
        echo 'Data from raspberry pi: <pre>' . print_r($get_data, true) . '</pre>';

        //POST Request
        $post_data = array('key' => 'Inactive');
        $options = array(
            'http' => array(
                'header' => "Content-type: application/json",
                'method' => 'POST',
                'content' => json_encode($post_data),
            ),
        );
        $context = stream_context_create($options);
        $result = file_get_contents($api_url, false, $context);
        echo 'Result of post request: <pre>' . print_r(json_decode($result, true), true) . '</pre>';
    ?>
</body>
</html>