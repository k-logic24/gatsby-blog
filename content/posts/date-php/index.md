---
title: "WordPressで9時間遅れていた話"
date: "2020-12-26"
hero: "../images/php.jpg"
tags: ["php", "wordpress"]
category: "tech"
---
## 前提
WordPressは内部的時刻がUTC（世界標準時）です。  
よって、以下のようなことが発生します。
```php
// 9時間ずれが発生
var_dump(date('Y/m/d H:i:s'));
```

0:00ぴったりに変わるシステムがあったとすると、勘違いで9:00に切り替わったなんて冷や汗ものです。

## date_i18n関数
`date_i18n()`を使う。
WordPress特有の関数です。
>I18n は、internationalization、すなわちアプリケーションを翻訳可能にするプロセスのことをいいます。WordPress では、決まった方法で翻訳されるべき文字列をマークすることを意味します。I と n の間に 18 文字あるため、これを i18n と呼びます。

望んだ時刻が返ってきます。

## DateTime関数
```php
$now = new DateTime('', new DateTimeZone('Asia/Tokyo'));
$now->format('Y-m-d H:i:s'); // 日本時間が返ってくる
```

ちなみにWordPressであればこれでいけます。
```php
$now = new DateTime('', new DateTimeZone(get_option('timezone_string')));
```
管理画面で設定されたタイムゾーンの文字列を取得できます。

## 感想
`date_i18n()`は便利だけど、WordPress専用関数なので、DateTime関数を使った方法がいいかも。
