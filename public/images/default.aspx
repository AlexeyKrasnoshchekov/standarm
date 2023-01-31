<% string title_str="Производитель трубопроводной арматуры.Стандарм" ; %>

	<!--#include virtual="/inc/top.aspx"-->

	<table cellpadding="0" cellspacing="0" border="0" width="100%"
		style="background-position:bottom;background-repeat:repeat-x;background-image: url('/i/bbot.gif')">
		<tr>
			<td background="/i/btop.gif"><img src=/i/btop.gif height=30 width=1></td>
		</tr>
		<tr>
			<td>


				<table cellpadding="0" cellspacing="10" border="0" align="center" width="90%">
					<tr>
						<td>
							<h1>НАШИ СОТРУДНИКИ РЯДОМ С ВАМИ</h1>
						</td>
					</tr>
					<tr>
						<td><img src="/i/map.gif" width="900"></td>
					</tr>

					<tr>
						<td>
							<div>
								<b>ООО «СТАНДАРМ»</b><br>
								<br>
								Адрес: 115114, г. Москва, ул. Летниковская, д.5, пом.l, ком.43<br>
								Телефон: 8(495) 775-00-35<br>
								Факс: 8(495) 775-00-39<br>
								E-mail: <a href="mailto:info@standarm.ru">info@standarm.ru</a><br>
							</div>
							<br>
						</td>
					</tr>
					<tr>
						<td>

							<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
							<div id="map" style="width: 600px; height: 400px"></div>
							<script type="text/javascript">
								ymaps.ready(init);
								var myMap, myPlacemark;;

								function init() {
									myMap = new ymaps.Map("map", {
										center: [55.727658, 37.645294],
										zoom: 16
									});

									myPlacemark = new ymaps.Placemark([55.727658, 37.645294], {
										hintContent: 'ООО Стандарм',
										balloonContent: 'ООО Стандарм'
									});

									myMap.geoObjects.add(myPlacemark);
								}
							</script>


						</td>
					</tr>
				</table>
			</td>
		</tr>
		<tr>
			<td><br><br><br><br><br><br><br><br></td>
		</tr>

	</table>



	<!--#include virtual="/inc/bottom.aspx"-->