$(document).ready(function() {
					$(document).foundation();
					var _mye = atob(
							'LXQtaS1tLW8tci1ALWMteS1oLWUteC0uLWMtby1tLQ==')
							.replace(/-/g, '');
					$(".email").attr('href', 'mailto:' + _mye).html(_mye);
					var tags = {
						'python' : 'http://python.org',
						'php' : 'http://php.net',
						'c' : 'http://en.wikipedia.org/wiki/C_%28programming_language%29',
						'c++' : 'http://en.wikipedia.org/wiki/C%2B%2B',
						'java' : 'https://en.wikipedia.org/wiki/Java_%28programming_language%29',
						'mysql' : 'http://www.mysql.com',
						'postgresql' : 'http://www.postgresql.org',
						'cassandra' : 'http://cassandra.apache.org/',
						'mongodb' : 'http://www.mongodb.org/',
						'dynamodb' : 'http://aws.amazon.com/dynamodb/',
						'sqlalchemy' : 'http://www.sqlalchemy.org/',
						'propel' : 'http://propelorm.org/',
						'hibernate' : 'http://www.hibernate.org/',
						'turbogears' : 'http://turbogears.org/',
						'turbogears2' : 'http://turbogears.org/',
						'zend framework' : 'http://framework.zend.com/',
						'jquery' : 'http://jquery.com/',
						'jqplot' : 'http://jqplot.com/',
						'bash' : 'https://en.wikipedia.org/wiki/Bash_%28Unix_shell%29',
						'nltk' : 'http://nltk.org',

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

				});