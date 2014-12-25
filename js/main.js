$(document).ready(function() {
    $(document).foundation();
    var _mye = atob(
            'LXQtaS1tLW8tci1ALWMteS1oLWUteC0uLWMtby1tLQ==')
            .replace(/-/g, '');
    $(".email").attr('href', 'mailto:' + _mye);
    var tags = {
        'python': 'http://python.org',
        'php': 'http://php.net',
        'c': 'http://en.wikipedia.org/wiki/C_%28programming_language%29',
        'c++': 'http://en.wikipedia.org/wiki/C%2B%2B',
        'java': 'https://en.wikipedia.org/wiki/Java_%28programming_language%29',
        'mysql': 'http://www.mysql.com',
        'postgresql': 'http://www.postgresql.org',
        'cassandra': 'http://cassandra.apache.org/',
        'mongodb': 'http://www.mongodb.org/',
        'dynamodb': 'http://aws.amazon.com/dynamodb/',
        'sqlalchemy': 'http://www.sqlalchemy.org/',
        'propel': 'http://propelorm.org/',
        'hibernate': 'http://www.hibernate.org/',
        'turbogears': 'http://turbogears.org/',
        'turbogears2': 'http://turbogears.org/',
        'zend framework': 'http://framework.zend.com/',
        'jquery': 'http://jquery.com/',
        'jqplot': 'http://jqplot.com/',
        'bash': 'https://en.wikipedia.org/wiki/Bash_%28Unix_shell%29',
        'nltk': 'http://nltk.org',
        'git': 'http://git-scm.com',
        'svn': 'http://subversion.apache.org/',
        'matplotlib': 'http://matplotlib.org/',
        'solr': 'http://lucene.apache.org/solr/',
        'foundation': 'http://foundation.zurb.com/',
        'spring mvc': 'http://www.springsource.org/',
        'aws': 'http://aws.amazon.com',
        'playframework': 'https://playframework.com/',
        'phalcon': 'http://www.phalconphp.com/'
    }

    var tagTemplate = "<a target='_blank' href='link'>name<a>";

    $('.label').each(
            function(i, e) {
                var tag = $(e).html().toLowerCase();
                var tagName = $(e).html();
                if (tags[tag]) {
                    var tagA = tagTemplate;
                    tagA = tagA.replace('link', tags[tag]);
                    tagA = tagA.replace('name', tagName);
                    $(e).html(tagA)
                } else {
                    var tagA = tagTemplate;
                    tagA = tagA.replace('link',
                            'http://www.google.com/search?q='
                            + tagName);
                    tagA = tagA.replace('name', tagName);
                    $(e).html(tagA)
                }

            });


    $('section.top-bar-section a').click(function() {
        $('li.toggle-topbar').click();
        var eid = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(eid).offset().top - 50
        }, 500);
        return false;
    });

    $('a.homeTrigger').click(function() {
        $('html, body').animate({
            scrollTop: 1
        }, 500);
        return false;
    });


});